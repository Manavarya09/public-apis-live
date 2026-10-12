# Benchmark

_Measured 2026-10-12 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4838 | 3348 | 345 | 1145 | 69.2% | 7.1% |
| APIs.guru | 2069 | 1217 | 198 | 654 | 58.8% | 9.6% |
| n0shake/Public-APIs | 480 | 352 | 29 | 99 | 73.3% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 28 | 102 | 84.5% | 3.3% |
| public-apis/public-apis | 2080 | 1597 | 113 | 370 | 76.8% | 5.4% |
