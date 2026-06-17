import pLimit from "p-limit";
import type { ApiEntry, Status } from "./types.js";

export function classify(code: number | null): { status: Status; httpCode?: number } {
  if (code === null) return { status: "unknown" };
  if (code === 401 || code === 403 || code === 429) return { status: "up", httpCode: code };
  if (code >= 200 && code < 400) return { status: "up", httpCode: code };
  return { status: "down", httpCode: code };
}

async function probe(url: string, timeoutMs = 8000): Promise<number | null> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: ac.signal });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: ac.signal });
    }
    return res.status;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

export async function verifyReachability(
  entries: ApiEntry[],
  concurrency = 20,
  fetchFn: (url: string) => Promise<number | null> = probe,
): Promise<ApiEntry[]> {
  const limit = pLimit(concurrency);
  const stamp = new Date().toISOString();
  await Promise.all(
    entries.map((e) =>
      limit(async () => {
        const start = Date.now();
        const code = await fetchFn(e.url);
        const { status, httpCode } = classify(code);
        e.status = status;
        e.httpCode = httpCode;
        e.responseMs = Date.now() - start;
        e.lastChecked = stamp;
      }),
    ),
  );
  return entries;
}
