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

// Fetches an OpenAPI spec URL and returns its endpoints. Returns [] on any failure.
export async function fetchEndpoints(specUrl: string, timeoutMs = 10000): Promise<Endpoint[]> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(specUrl, { signal: ac.signal });
    if (!res.ok) return [];
    return parseOpenApiEndpoints(await res.json());
  } catch {
    return [];
  } finally {
    clearTimeout(t);
  }
}
