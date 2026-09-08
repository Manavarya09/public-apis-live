# Benchmark

_Measured 2026-09-08 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4491 | 3054 | 364 | 1073 | 68% | 8.1% |
| APIs.guru | 2069 | 1217 | 198 | 654 | 58.8% | 9.6% |
| n0shake/Public-APIs | 480 | 355 | 32 | 93 | 74% | 6.7% |
| public-api-lists/public-api-lists | 802 | 676 | 25 | 101 | 84.3% | 3.1% |
| public-apis/public-apis | 1752 | 1310 | 134 | 308 | 74.8% | 7.6% |
