# Benchmark

_Measured 2026-10-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3458 | 339 | 1145 | 70% | 6.9% |
| APIs.guru | 2069 | 1211 | 198 | 660 | 58.5% | 9.6% |
| n0shake/Public-APIs | 480 | 348 | 30 | 102 | 72.5% | 6.3% |
| public-api-lists/public-api-lists | 837 | 692 | 35 | 110 | 82.7% | 4.2% |
| public-apis/public-apis | 2184 | 1730 | 93 | 361 | 79.2% | 4.3% |
