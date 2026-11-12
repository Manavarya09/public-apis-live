# Benchmark

_Measured 2026-11-12 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5150 | 3689 | 322 | 1139 | 71.6% | 6.3% |
| APIs.guru | 2069 | 1234 | 180 | 655 | 59.6% | 8.7% |
| n0shake/Public-APIs | 480 | 352 | 27 | 101 | 73.3% | 5.6% |
| public-api-lists/public-api-lists | 837 | 696 | 29 | 112 | 83.2% | 3.5% |
| public-apis/public-apis | 2393 | 1932 | 101 | 360 | 80.7% | 4.2% |
