# Benchmark

_Measured 2026-06-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2878 | 356 | 1051 | 67.2% | 8.3% |
| APIs.guru | 2069 | 1219 | 200 | 650 | 58.9% | 9.7% |
| n0shake/Public-APIs | 480 | 360 | 27 | 93 | 75% | 5.6% |
| public-api-lists/public-api-lists | 775 | 644 | 28 | 103 | 83.1% | 3.6% |
| public-apis/public-apis | 1565 | 1159 | 118 | 288 | 74.1% | 7.5% |
