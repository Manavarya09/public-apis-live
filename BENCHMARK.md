# Benchmark

_Measured 2026-09-29 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4714 | 3179 | 356 | 1179 | 67.4% | 7.6% |
| APIs.guru | 2069 | 1154 | 191 | 724 | 55.8% | 9.2% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 27 | 100 | 84.8% | 3.2% |
| public-apis/public-apis | 1954 | 1481 | 132 | 341 | 75.8% | 6.8% |
