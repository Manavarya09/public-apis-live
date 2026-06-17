import { writeFileSync } from "node:fs";
import { runPipeline } from "../packages/core/src/pipeline.js";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";

const { entries } = await runPipeline();
entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
const date = new Date().toISOString().slice(0, 10);

writeFileSync("data/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("packages/core/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("README.md", renderReadme(entries, date));
writeFileSync("data/badge.json", renderBadge(entries));
console.log(`Wrote ${entries.length} APIs (verified ${date}).`);
