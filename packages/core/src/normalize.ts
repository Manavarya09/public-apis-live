import type { ApiEntry, RawEntry } from "./types.js";

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function host(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "").toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}
function dedupeKey(e: RawEntry): string {
  return `${host(e.url)}|${slugify(e.name)}`;
}

export function mergeAndDedupe(raws: RawEntry[]): ApiEntry[] {
  const byKey = new Map<string, ApiEntry>();
  for (const r of raws) {
    const key = dedupeKey(r);
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, {
        id: slugify(r.name),
        name: r.name,
        description: r.description,
        category: r.category,
        url: r.url,
        auth: r.auth ?? "unknown",
        https: r.https ?? false,
        cors: r.cors ?? "unknown",
        sourceRepos: [r.sourceRepo],
        status: "unknown",
      });
    } else {
      if (!existing.sourceRepos.includes(r.sourceRepo)) existing.sourceRepos.push(r.sourceRepo);
      if (r.https) existing.https = true;
      if ((r.description?.length ?? 0) > existing.description.length) existing.description = r.description;
      if (existing.auth === "unknown" && r.auth) existing.auth = r.auth;
      if (existing.cors === "unknown" && r.cors && r.cors !== "unknown") existing.cors = r.cors;
    }
  }
  // de-collide duplicate ids by appending host
  const seen = new Set<string>();
  for (const e of byKey.values()) {
    if (seen.has(e.id)) e.id = `${e.id}-${host(e.url).split(".")[0]}`;
    seen.add(e.id);
  }
  return [...byKey.values()];
}
