# Benchmark

_Measured 2026-10-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3454 | 343 | 1145 | 69.9% | 6.9% |
| APIs.guru | 2069 | 1210 | 198 | 661 | 58.5% | 9.6% |
| n0shake/Public-APIs | 480 | 352 | 33 | 95 | 73.3% | 6.9% |
| public-api-lists/public-api-lists | 837 | 695 | 31 | 111 | 83% | 3.7% |
| public-apis/public-apis | 2184 | 1713 | 103 | 368 | 78.4% | 4.7% |
