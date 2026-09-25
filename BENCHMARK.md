# Benchmark

_Measured 2026-09-25 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4667 | 3201 | 357 | 1109 | 68.6% | 7.6% |
| APIs.guru | 2069 | 1222 | 192 | 655 | 59.1% | 9.3% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 712 | 23 | 102 | 85.1% | 2.7% |
| public-apis/public-apis | 1907 | 1432 | 133 | 342 | 75.1% | 7% |
