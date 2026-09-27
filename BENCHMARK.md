# Benchmark

_Measured 2026-09-27 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4697 | 3227 | 357 | 1113 | 68.7% | 7.6% |
| APIs.guru | 2069 | 1224 | 191 | 654 | 59.2% | 9.2% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 712 | 24 | 101 | 85.1% | 2.9% |
| public-apis/public-apis | 1938 | 1459 | 134 | 345 | 75.3% | 6.9% |
