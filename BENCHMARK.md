# Benchmark

_Measured 2026-09-13 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4524 | 3049 | 363 | 1112 | 67.4% | 8% |
| APIs.guru | 2069 | 1193 | 196 | 680 | 57.7% | 9.5% |
| n0shake/Public-APIs | 480 | 349 | 32 | 99 | 72.7% | 6.7% |
| public-api-lists/public-api-lists | 802 | 670 | 27 | 105 | 83.5% | 3.4% |
| public-apis/public-apis | 1785 | 1338 | 133 | 314 | 75% | 7.5% |
