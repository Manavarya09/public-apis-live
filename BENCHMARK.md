# Benchmark

_Measured 2026-10-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4813 | 3311 | 337 | 1165 | 68.8% | 7% |
| APIs.guru | 2069 | 1216 | 196 | 657 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 344 | 27 | 109 | 71.7% | 5.6% |
| public-api-lists/public-api-lists | 837 | 697 | 26 | 114 | 83.3% | 3.1% |
| public-apis/public-apis | 2054 | 1565 | 107 | 382 | 76.2% | 5.2% |
