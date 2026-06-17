// Regenerate README.md + badge from the existing data/apis.json (no network re-check).
import { readFileSync, writeFileSync } from "node:fs";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";
import { renderBenchmark } from "../packages/core/src/emit/benchmark.js";
import { computeBenchmark } from "../packages/core/src/benchmark.js";
import type { ApiEntry } from "../packages/core/src/types.js";

const entries = JSON.parse(readFileSync("data/apis.json", "utf8")) as ApiEntry[];
const dates = entries.map((e) => e.lastChecked).filter(Boolean) as string[];
const date = dates.length ? dates.sort().at(-1)!.slice(0, 10) : new Date().toISOString().slice(0, 10);

const benchmark = computeBenchmark(entries);
writeFileSync("README.md", renderReadme(entries, date));
writeFileSync("data/badge.json", renderBadge(entries));
writeFileSync("BENCHMARK.md", renderBenchmark(benchmark, date));
writeFileSync("data/benchmark.json", JSON.stringify(benchmark, null, 2));
console.log(`Re-rendered README + badge + benchmark for ${entries.length} APIs (verified ${date}).`);
