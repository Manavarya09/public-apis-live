export interface WebApiEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  auth: string;
  https: boolean;
  status: "up" | "down" | "unknown";
}

export interface Criteria {
  search?: string;
  category?: string;
  auth?: string;
  status?: string;
}

export function filterApis(entries: WebApiEntry[], c: Criteria): WebApiEntry[] {
  return entries.filter((a) => {
    if (c.category && a.category !== c.category) return false;
    if (c.auth && a.auth !== c.auth) return false;
    if (c.status && a.status !== c.status) return false;
    if (c.search) {
      const q = c.search.toLowerCase();
      if (!`${a.name} ${a.description}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}
