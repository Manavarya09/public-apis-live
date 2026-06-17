import Fuse from "fuse.js";

export interface WebApiEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  auth: string;
  https: boolean;
  status: "up" | "down" | "unknown";
  uptimePct?: number;
}

export interface Criteria {
  search?: string;
  category?: string;
  auth?: string;
  status?: string;
}

// Mirrors core's Fuse config so the site ranks results the same way the npm/MCP query does.
const FUSE_OPTIONS = {
  keys: [
    { name: "name", weight: 0.6 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

export function filterApis(entries: WebApiEntry[], c: Criteria): WebApiEntry[] {
  let res = entries.filter((a) => {
    if (c.category && a.category !== c.category) return false;
    if (c.auth && a.auth !== c.auth) return false;
    if (c.status && a.status !== c.status) return false;
    return true;
  });
  const q = c.search?.trim();
  if (q) {
    res = new Fuse(res, FUSE_OPTIONS).search(q).map((r) => r.item);
  }
  return res;
}
