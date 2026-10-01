# Benchmark

_Measured 2026-10-01 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4714 | 3245 | 359 | 1110 | 68.8% | 7.6% |
| APIs.guru | 2069 | 1223 | 195 | 651 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 708 | 26 | 103 | 84.6% | 3.1% |
| public-apis/public-apis | 1954 | 1481 | 130 | 343 | 75.8% | 6.7% |
