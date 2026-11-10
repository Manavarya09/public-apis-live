# Benchmark

_Measured 2026-11-10 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5124 | 3652 | 329 | 1143 | 71.3% | 6.4% |
| APIs.guru | 2069 | 1213 | 195 | 661 | 58.6% | 9.4% |
| n0shake/Public-APIs | 480 | 352 | 27 | 101 | 73.3% | 5.6% |
| public-api-lists/public-api-lists | 837 | 701 | 25 | 111 | 83.8% | 3% |
| public-apis/public-apis | 2367 | 1917 | 95 | 355 | 81% | 4% |
