# Benchmark

_Measured 2026-06-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2872 | 366 | 1049 | 67% | 8.5% |
| APIs.guru | 2069 | 1214 | 202 | 653 | 58.7% | 9.8% |
| n0shake/Public-APIs | 480 | 359 | 28 | 93 | 74.8% | 5.8% |
| public-api-lists/public-api-lists | 775 | 645 | 27 | 103 | 83.2% | 3.5% |
| public-apis/public-apis | 1568 | 1154 | 128 | 286 | 73.6% | 8.2% |
