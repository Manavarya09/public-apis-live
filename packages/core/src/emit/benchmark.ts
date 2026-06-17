import type { Benchmark, Stat } from "../benchmark.js";

const row = (s: Stat) =>
  `| ${s.label} | ${s.total} | ${s.up} | ${s.down} | ${s.unknown} | ${s.workingRate}% | ${s.deadRate}% |`;

export function renderBenchmark(b: Benchmark, date: string): string {
  return [
    "# Benchmark",
    "",
    `_Measured ${date} from the live, reachability-verified dataset. Regenerated daily._`,
    "",
    "How the major public-API lists actually hold up once **every link is checked**.",
    'Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.',
    "Per-source rows count an entry under every list it appears in, so they overlap; the merged row is",
    "deduped. This table is produced by the same verification that builds the directory — reproducible,",
    "not hand-curated.",
    "",
    "| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |",
    "|---|---|---|---|---|---|---|",
    row(b.overall),
    ...b.sources.map(row),
    "",
  ].join("\n");
}
