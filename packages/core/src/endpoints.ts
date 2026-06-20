export interface Endpoint { method: string; path: string; summary?: string; }

const METHODS = new Set(["get", "post", "put", "delete", "patch", "head", "options"]);

// Extracts the operations (method + path + summary) from an OpenAPI/Swagger spec object.
export function parseOpenApiEndpoints(spec: unknown): Endpoint[] {
  const out: Endpoint[] = [];
  const paths = (spec as { paths?: Record<string, unknown> })?.paths;
  if (!paths || typeof paths !== "object") return out;
  for (const [path, ops] of Object.entries(paths)) {
    if (!ops || typeof ops !== "object") continue;
    for (const [method, op] of Object.entries(ops as Record<string, unknown>)) {
      if (!METHODS.has(method.toLowerCase())) continue;
      out.push({ method: method.toUpperCase(), path, summary: (op as { summary?: string })?.summary });
    }
  }
  return out;
}

// Resolves the base server URL of a spec: OpenAPI 3 `servers[0].url`, else Swagger 2
// `schemes[0]://host + basePath`. Returns null when the base can't be made absolute.
function baseUrl(spec: Record<string, unknown>): string | null {
  const servers = spec.servers as { url?: string }[] | undefined;
  // Use the first absolute server URL that has no `{var}` template — a templated URL isn't callable.
  const s = servers?.map((x) => x?.url).find((u) => u && /^https?:\/\//.test(u) && !u.includes("{"));
  if (s) return s.replace(/\/$/, "");
  const host = spec.host as string | undefined;
  if (host) {
    const scheme = (spec.schemes as string[] | undefined)?.[0] ?? "https";
    const base = (spec.basePath as string | undefined) ?? "";
    return `${scheme}://${host}${base}`.replace(/\/$/, "");
  }
  return null;
}

// Picks one safely-callable endpoint from a spec: a GET on a non-templated path with no required
// parameters, combined with the base server URL. Returns null when none qualifies. Used to probe
// whether an API actually returns data (instead of GETting its homepage).
export function pickCallableEndpoint(spec: unknown): string | null {
  if (!spec || typeof spec !== "object") return null;
  const s = spec as Record<string, unknown>;
  const base = baseUrl(s);
  if (!base) return null;
  const paths = s.paths as Record<string, Record<string, unknown>> | undefined;
  if (!paths || typeof paths !== "object") return null;
  const candidates = Object.entries(paths)
    .filter(([path]) => !path.includes("{"))
    .filter(([, ops]) => {
      const get = ops?.get as { parameters?: { required?: boolean }[] } | undefined;
      if (!get) return false;
      return !(get.parameters ?? []).some((p) => p.required);
    })
    .map(([path]) => path)
    .sort((a, b) => a.length - b.length); // prefer the simplest path
  return candidates.length ? `${base}${candidates[0]}` : null;
}

// Fetches and parses an OpenAPI spec URL. Returns null on any failure.
export async function fetchSpec(specUrl: string, timeoutMs = 10000): Promise<unknown> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(specUrl, { signal: ac.signal });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

// Fetches an OpenAPI spec URL and returns its endpoints. Returns [] on any failure.
export async function fetchEndpoints(specUrl: string, timeoutMs = 10000): Promise<Endpoint[]> {
  const spec = await fetchSpec(specUrl, timeoutMs);
  return spec ? parseOpenApiEndpoints(spec) : [];
}
