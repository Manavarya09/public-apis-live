# Benchmark

_Measured 2026-10-10 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3321 | 362 | 1118 | 69.2% | 7.5% |
| APIs.guru | 2069 | 1221 | 198 | 650 | 59% | 9.6% |
| n0shake/Public-APIs | 480 | 356 | 30 | 94 | 74.2% | 6.3% |
| public-api-lists/public-api-lists | 837 | 706 | 26 | 105 | 84.3% | 3.1% |
| public-apis/public-apis | 2042 | 1560 | 130 | 352 | 76.4% | 6.4% |
