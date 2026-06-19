import pLimit from "p-limit";
import type { ApiEntry, Status } from "./types.js";

export interface ProbeResult { code: number | null; url?: string; redirected?: boolean }

export function classify(code: number | null): { status: Status; httpCode?: number } {
  if (code === null) return { status: "unknown" };
  if (code >= 200 && code < 400) return { status: "up", httpCode: code };
  // Server responded but the URL isn't usable as-is: auth-walled, rate-limited, or bot-blocked.
  // Not "working" for a showcase, but not provably dead either → unverified.
  if (code === 401 || code === 403 || code === 429) return { status: "unknown", httpCode: code };
  return { status: "down", httpCode: code };
}

// True when a request was redirected to a DIFFERENT domain's bare homepage — the classic signature
// of a sunset/moved API (e.g. an old NYT endpoint that 3xx-redirects to nytimes.com/).
export function isHomepageRedirect(originalUrl: string, finalUrl?: string, redirected?: boolean): boolean {
  if (!redirected || !finalUrl) return false;
  try {
    const oHost = new URL(originalUrl).host.replace(/^www\./, "");
    const f = new URL(finalUrl);
    const fHost = f.host.replace(/^www\./, "");
    const rootPath = f.pathname === "/" || f.pathname === "";
    return oHost !== fHost && rootPath;
  } catch {
    return false;
  }
}

export function classifyResult(originalUrl: string, r: ProbeResult): { status: Status; httpCode?: number } {
  const base = classify(r.code);
  if (base.status === "up" && isHomepageRedirect(originalUrl, r.url, r.redirected)) {
    return { status: "unknown", httpCode: r.code ?? undefined }; // moved/gone, landed on a generic homepage
  }
  return base;
}

async function probe(url: string, timeoutMs = 8000): Promise<ProbeResult> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: ac.signal });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: ac.signal });
    }
    return { code: res.status, url: res.url, redirected: res.redirected };
  } catch {
    return { code: null };
  } finally {
    clearTimeout(t);
  }
}

// A no-auth GET "returns data" when the response is 2xx and the body is non-empty and not an
// HTML page (so JSON/text/CSV count, landing pages don't). Honest functional signal, no keys.
export function isDataResponse(code: number | null, body: string | null): boolean {
  if (code === null || code < 200 || code >= 300) return false;
  const t = (body ?? "").trim();
  return t.length > 0 && !t.startsWith("<");
}

async function dataProbe(url: string, timeoutMs = 8000): Promise<{ code: number | null; body: string | null }> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow", signal: ac.signal });
    const body = await res.text();
    return { code: res.status, body: body.slice(0, 4096) };
  } catch {
    return { code: null, body: null };
  } finally {
    clearTimeout(t);
  }
}

// Deeper check for the no-auth, currently-reachable subset: GET the URL and flag returnsData.
export async function verifyFunctional(
  entries: ApiEntry[],
  concurrency = 20,
  probeFn: (url: string) => Promise<{ code: number | null; body: string | null }> = dataProbe,
): Promise<ApiEntry[]> {
  const limit = pLimit(concurrency);
  const targets = entries.filter((e) => e.status === "up" && e.auth === "none");
  await Promise.all(
    targets.map((e) =>
      limit(async () => {
        const { code, body } = await probeFn(e.url);
        e.returnsData = isDataResponse(code, body);
      }),
    ),
  );
  return entries;
}

export async function verifyReachability(
  entries: ApiEntry[],
  concurrency = 20,
  fetchFn: (url: string) => Promise<ProbeResult> = probe,
): Promise<ApiEntry[]> {
  const limit = pLimit(concurrency);
  const stamp = new Date().toISOString();
  await Promise.all(
    entries.map((e) =>
      limit(async () => {
        const start = Date.now();
        const r = await fetchFn(e.url);
        const { status, httpCode } = classifyResult(e.url, r);
        e.status = status;
        e.httpCode = httpCode;
        e.responseMs = Date.now() - start;
        e.lastChecked = stamp;
      }),
    ),
  );
  return entries;
}
