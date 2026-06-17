import type { ApiEntry } from "./types.js";

export interface Stat {
  label: string;
  total: number;
  up: number;
  down: number;
  unknown: number;
  workingRate: number; // % of entries that responded
  deadRate: number; // % of entries that failed (DNS/conn/5xx/404)
}

export interface Benchmark {
  overall: Stat;
  sources: Stat[];
}

function pct(n: number, total: number): number {
  return total ? Math.round((n / total) * 1000) / 10 : 0;
}

function stat(label: string, entries: ApiEntry[]): Stat {
  const total = entries.length;
  const up = entries.filter((e) => e.status === "up").length;
  const down = entries.filter((e) => e.status === "down").length;
  const unknown = entries.filter((e) => e.status === "unknown").length;
  return { label, total, up, down, unknown, workingRate: pct(up, total), deadRate: pct(down, total) };
}

// Derives a competitive benchmark from the already-verified merged dataset:
// each source list's real working/dead rate, plus the merged total. No extra network.
export function computeBenchmark(entries: ApiEntry[]): Benchmark {
  const sources = [...new Set(entries.flatMap((e) => e.sourceRepos))].sort();
  return {
    overall: stat("public-apis-live (merged, deduped)", entries),
    sources: sources.map((s) => stat(s, entries.filter((e) => e.sourceRepos.includes(s)))),
  };
}
