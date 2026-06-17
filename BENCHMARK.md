# Benchmark

_Measured 2026-06-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2354 | 471 | 1462 | 54.9% | 11% |
| APIs.guru | 2069 | 715 | 311 | 1043 | 34.6% | 15% |
| n0shake/Public-APIs | 480 | 357 | 29 | 94 | 74.4% | 6% |
| public-api-lists/public-api-lists | 775 | 641 | 27 | 107 | 82.7% | 3.5% |
| public-apis/public-apis | 1561 | 1135 | 121 | 305 | 72.7% | 7.8% |
