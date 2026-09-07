# Benchmark

_Measured 2026-09-07 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4491 | 3053 | 365 | 1073 | 68% | 8.1% |
| APIs.guru | 2069 | 1215 | 200 | 654 | 58.7% | 9.7% |
| n0shake/Public-APIs | 480 | 351 | 31 | 98 | 73.1% | 6.5% |
| public-api-lists/public-api-lists | 802 | 676 | 24 | 102 | 84.3% | 3% |
| public-apis/public-apis | 1752 | 1314 | 134 | 304 | 75% | 7.6% |
