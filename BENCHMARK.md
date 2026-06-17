# Benchmark

_Measured 2026-06-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2740 | 470 | 1077 | 63.9% | 11% |
| APIs.guru | 2069 | 1042 | 313 | 714 | 50.4% | 15.1% |
| n0shake/Public-APIs | 480 | 365 | 30 | 85 | 76% | 6.3% |
| public-api-lists/public-api-lists | 775 | 658 | 25 | 92 | 84.9% | 3.2% |
| public-apis/public-apis | 1561 | 1168 | 119 | 274 | 74.8% | 7.6% |
