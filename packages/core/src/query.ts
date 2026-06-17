import type { ApiEntry, Auth, Status } from "./types.js";

export interface Filter { category?: string; auth?: Auth; status?: Status; search?: string; }

export function makeQuery(data: ApiEntry[]) {
  return {
    getApi: (id: string) => data.find((a) => a.id === id) ?? null,
    listCategories: () => [...new Set(data.map((a) => a.category))].sort(),
    findApis: (f: Filter = {}): ApiEntry[] =>
      data.filter((a) => {
        if (f.category && a.category !== f.category) return false;
        if (f.auth && a.auth !== f.auth) return false;
        if (f.status && a.status !== f.status) return false;
        if (f.search) {
          const q = f.search.toLowerCase();
          if (!`${a.name} ${a.description}`.toLowerCase().includes(q)) return false;
        }
        return true;
      }),
  };
}
