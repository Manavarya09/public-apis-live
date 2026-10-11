# Benchmark

_Measured 2026-10-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4813 | 3313 | 334 | 1166 | 68.8% | 6.9% |
| APIs.guru | 2069 | 1217 | 196 | 656 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 348 | 28 | 104 | 72.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 697 | 25 | 115 | 83.3% | 3% |
| public-apis/public-apis | 2054 | 1565 | 104 | 385 | 76.2% | 5.1% |
