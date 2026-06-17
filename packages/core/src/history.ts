import type { ApiEntry, Status } from "./types.js";

export interface DayStatus { d: string; s: Status; }
export type History = Record<string, DayStatus[]>;

const WINDOW = 30;

// Appends today's status for each current entry (one record per id per day),
// drops history for ids no longer present, and trims each series to the last 30 days.
export function updateHistory(prev: History, entries: ApiEntry[], date: string): History {
  const next: History = {};
  for (const e of entries) {
    const series = (prev[e.id] ?? []).filter((r) => r.d !== date);
    series.push({ d: date, s: e.status });
    next[e.id] = series.slice(-WINDOW);
  }
  return next;
}

export function reliabilityPct(records: DayStatus[]): number {
  if (records.length === 0) return 0;
  const up = records.filter((r) => r.s === "up").length;
  return Math.round((up / records.length) * 1000) / 10;
}
