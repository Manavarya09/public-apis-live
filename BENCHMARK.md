# Benchmark

_Measured 2026-06-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2690 | 359 | 1232 | 62.8% | 8.4% |
| APIs.guru | 2069 | 1027 | 204 | 838 | 49.6% | 9.9% |
| n0shake/Public-APIs | 480 | 360 | 28 | 92 | 75% | 5.8% |
| public-api-lists/public-api-lists | 775 | 649 | 28 | 98 | 83.7% | 3.6% |
| public-apis/public-apis | 1561 | 1160 | 117 | 284 | 74.3% | 7.5% |
