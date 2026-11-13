# Benchmark

_Measured 2026-11-13 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5150 | 3688 | 314 | 1148 | 71.6% | 6.1% |
| APIs.guru | 2069 | 1228 | 178 | 663 | 59.4% | 8.6% |
| n0shake/Public-APIs | 480 | 358 | 26 | 96 | 74.6% | 5.4% |
| public-api-lists/public-api-lists | 837 | 695 | 29 | 113 | 83% | 3.5% |
| public-apis/public-apis | 2393 | 1934 | 95 | 364 | 80.8% | 4% |
