# Benchmark

_Measured 2026-10-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3316 | 352 | 1133 | 69.1% | 7.3% |
| APIs.guru | 2069 | 1222 | 195 | 652 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 706 | 26 | 105 | 84.3% | 3.1% |
| public-apis/public-apis | 2042 | 1558 | 124 | 360 | 76.3% | 6.1% |
