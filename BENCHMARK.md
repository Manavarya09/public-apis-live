# Benchmark

_Measured 2026-06-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2901 | 352 | 1028 | 67.8% | 8.2% |
| APIs.guru | 2069 | 1196 | 199 | 674 | 57.8% | 9.6% |
| n0shake/Public-APIs | 480 | 368 | 29 | 83 | 76.7% | 6% |
| public-api-lists/public-api-lists | 775 | 671 | 26 | 78 | 86.6% | 3.4% |
| public-apis/public-apis | 1561 | 1181 | 118 | 262 | 75.7% | 7.6% |
