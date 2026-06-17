import type { ApiEntry } from "../types.js";

export function renderBadge(data: ApiEntry[]): string {
  const up = data.filter((a) => a.status === "up").length;
  return JSON.stringify({ schemaVersion: 1, label: "public APIs", message: `${up} reachable`, color: "brightgreen" });
}
