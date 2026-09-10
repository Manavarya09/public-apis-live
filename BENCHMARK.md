# Benchmark

_Measured 2026-09-10 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4504 | 2872 | 358 | 1274 | 63.8% | 7.9% |
| APIs.guru | 2069 | 1040 | 195 | 834 | 50.3% | 9.4% |
| n0shake/Public-APIs | 480 | 347 | 30 | 103 | 72.3% | 6.3% |
| public-api-lists/public-api-lists | 802 | 674 | 26 | 102 | 84% | 3.2% |
| public-apis/public-apis | 1765 | 1314 | 131 | 320 | 74.4% | 7.4% |
