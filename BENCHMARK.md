# Benchmark

_Measured 2026-10-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4925 | 3452 | 328 | 1145 | 70.1% | 6.7% |
| APIs.guru | 2069 | 1208 | 197 | 664 | 58.4% | 9.5% |
| n0shake/Public-APIs | 480 | 352 | 27 | 101 | 73.3% | 5.6% |
| public-api-lists/public-api-lists | 837 | 710 | 24 | 103 | 84.8% | 2.9% |
| public-apis/public-apis | 2167 | 1713 | 94 | 360 | 79% | 4.3% |
