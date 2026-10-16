# Benchmark

_Measured 2026-10-16 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4902 | 3454 | 329 | 1119 | 70.5% | 6.7% |
| APIs.guru | 2069 | 1217 | 198 | 654 | 58.8% | 9.6% |
| n0shake/Public-APIs | 480 | 354 | 28 | 98 | 73.8% | 5.8% |
| public-api-lists/public-api-lists | 837 | 711 | 23 | 103 | 84.9% | 2.7% |
| public-apis/public-apis | 2144 | 1700 | 93 | 351 | 79.3% | 4.3% |
