# Benchmark

_Measured 2026-09-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4609 | 3152 | 361 | 1096 | 68.4% | 7.8% |
| APIs.guru | 2069 | 1219 | 194 | 656 | 58.9% | 9.4% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 703 | 29 | 105 | 84% | 3.5% |
| public-apis/public-apis | 1846 | 1385 | 134 | 327 | 75% | 7.3% |
