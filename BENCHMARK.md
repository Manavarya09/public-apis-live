# Benchmark

_Measured 2026-10-04 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4782 | 3313 | 357 | 1112 | 69.3% | 7.5% |
| APIs.guru | 2069 | 1224 | 195 | 650 | 59.2% | 9.4% |
| n0shake/Public-APIs | 480 | 357 | 29 | 94 | 74.4% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 25 | 105 | 84.5% | 3% |
| public-apis/public-apis | 2023 | 1546 | 128 | 349 | 76.4% | 6.3% |
