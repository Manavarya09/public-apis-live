# Benchmark

_Measured 2026-11-26 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3810 | 324 | 1162 | 71.9% | 6.1% |
| APIs.guru | 2069 | 1240 | 178 | 651 | 59.9% | 8.6% |
| n0shake/Public-APIs | 480 | 357 | 25 | 98 | 74.4% | 5.2% |
| public-api-lists/public-api-lists | 837 | 695 | 30 | 112 | 83% | 3.6% |
| public-apis/public-apis | 2539 | 2044 | 106 | 389 | 80.5% | 4.2% |
