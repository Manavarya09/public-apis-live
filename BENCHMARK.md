# Benchmark

_Measured 2026-09-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3187 | 362 | 1098 | 68.6% | 7.8% |
| APIs.guru | 2069 | 1223 | 194 | 652 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 27 | 103 | 84.5% | 3.2% |
| public-apis/public-apis | 1887 | 1420 | 134 | 333 | 75.3% | 7.1% |
