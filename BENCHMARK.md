# Benchmark

_Measured 2026-10-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4925 | 3475 | 326 | 1124 | 70.6% | 6.6% |
| APIs.guru | 2069 | 1211 | 197 | 661 | 58.5% | 9.5% |
| n0shake/Public-APIs | 480 | 358 | 28 | 94 | 74.6% | 5.8% |
| public-api-lists/public-api-lists | 837 | 713 | 23 | 101 | 85.2% | 2.7% |
| public-apis/public-apis | 2167 | 1727 | 91 | 349 | 79.7% | 4.2% |
