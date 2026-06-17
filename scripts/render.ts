// Regenerate all artifacts from the existing data/apis.json (no network re-check).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";
import { renderBenchmark } from "../packages/core/src/emit/benchmark.js";
import { computeBenchmark } from "../packages/core/src/benchmark.js";
import { updateHistory, reliabilityPct, type History } from "../packages/core/src/history.js";
import type { ApiEntry } from "../packages/core/src/types.js";

const entries = JSON.parse(readFileSync("data/apis.json", "utf8")) as ApiEntry[];
const dates = entries.map((e) => e.lastChecked).filter(Boolean) as string[];
const date = dates.length ? dates.sort().at(-1)!.slice(0, 10) : new Date().toISOString().slice(0, 10);

const prev: History = existsSync("data/history.json")
  ? (JSON.parse(readFileSync("data/history.json", "utf8")) as History)
  : {};
const history = updateHistory(prev, entries, date);
for (const e of entries) {
  e.checks = history[e.id]?.length ?? 0;
  e.uptimePct = reliabilityPct(history[e.id] ?? []);
}

writeFileSync("data/history.json", JSON.stringify(history));
writeFileSync("data/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("packages/core/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("README.md", renderReadme(entries, date));
writeFileSync("data/badge.json", renderBadge(entries));
writeFileSync("BENCHMARK.md", renderBenchmark(computeBenchmark(entries), date));
writeFileSync("data/benchmark.json", JSON.stringify(computeBenchmark(entries), null, 2));
console.log(`Re-rendered all artifacts for ${entries.length} APIs (verified ${date}).`);
