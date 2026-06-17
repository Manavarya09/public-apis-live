import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { runPipeline } from "../packages/core/src/pipeline.js";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";
import { renderBenchmark } from "../packages/core/src/emit/benchmark.js";
import { computeBenchmark } from "../packages/core/src/benchmark.js";
import { updateHistory, reliabilityPct, type History } from "../packages/core/src/history.js";

const { entries } = await runPipeline();
entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
const date = new Date().toISOString().slice(0, 10);

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
console.log(`Wrote ${entries.length} APIs (verified ${date}).`);
