# Benchmark

_Measured 2026-10-08 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3317 | 359 | 1125 | 69.1% | 7.5% |
| APIs.guru | 2069 | 1222 | 197 | 650 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 705 | 26 | 106 | 84.2% | 3.1% |
| public-apis/public-apis | 2042 | 1557 | 128 | 357 | 76.2% | 6.3% |
