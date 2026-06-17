import Fuse from "fuse.js";
import type { ApiEntry } from "./types.js";

export const FUSE_OPTIONS = {
  keys: [
    { name: "name", weight: 0.6 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

// Fuzzy, relevance-ranked search over name/description/category. Returns best matches first.
export function fuzzySearch(entries: ApiEntry[], query: string): ApiEntry[] {
  const q = query.trim();
  if (!q) return entries;
  const fuse = new Fuse(entries, FUSE_OPTIONS);
  return fuse.search(q).map((r) => r.item);
}
