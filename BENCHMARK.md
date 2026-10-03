# Benchmark

_Measured 2026-10-03 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4746 | 3263 | 361 | 1122 | 68.8% | 7.6% |
| APIs.guru | 2069 | 1214 | 197 | 658 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 26 | 105 | 84.3% | 3.1% |
| public-apis/public-apis | 1985 | 1507 | 130 | 348 | 75.9% | 6.5% |
