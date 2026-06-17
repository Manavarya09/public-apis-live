# Benchmark

_Measured 2026-06-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2725 | 474 | 1088 | 63.6% | 11.1% |
| APIs.guru | 2069 | 1032 | 310 | 727 | 49.9% | 15% |
| n0shake/Public-APIs | 480 | 365 | 30 | 85 | 76% | 6.3% |
| public-api-lists/public-api-lists | 775 | 656 | 30 | 89 | 84.6% | 3.9% |
| public-apis/public-apis | 1561 | 1168 | 122 | 271 | 74.8% | 7.8% |
