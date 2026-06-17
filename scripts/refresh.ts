import { writeFileSync } from "node:fs";
import { runPipeline } from "../packages/core/src/pipeline.js";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";
import { renderBenchmark } from "../packages/core/src/emit/benchmark.js";
import { computeBenchmark } from "../packages/core/src/benchmark.js";

const { entries } = await runPipeline();
entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
const date = new Date().toISOString().slice(0, 10);

writeFileSync("data/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("packages/core/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("README.md", renderReadme(entries, date));
writeFileSync("data/badge.json", renderBadge(entries));
writeFileSync("BENCHMARK.md", renderBenchmark(computeBenchmark(entries), date));
writeFileSync("data/benchmark.json", JSON.stringify(computeBenchmark(entries), null, 2));
console.log(`Wrote ${entries.length} APIs (verified ${date}).`);
