# Benchmark

_Measured 2026-11-14 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5183 | 3726 | 316 | 1141 | 71.9% | 6.1% |
| APIs.guru | 2069 | 1238 | 178 | 653 | 59.8% | 8.6% |
| n0shake/Public-APIs | 480 | 346 | 25 | 109 | 72.1% | 5.2% |
| public-api-lists/public-api-lists | 837 | 698 | 29 | 110 | 83.4% | 3.5% |
| public-apis/public-apis | 2426 | 1972 | 98 | 356 | 81.3% | 4% |
