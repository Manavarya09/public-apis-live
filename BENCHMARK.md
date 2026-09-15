# Benchmark

_Measured 2026-09-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4575 | 3130 | 370 | 1075 | 68.4% | 8.1% |
| APIs.guru | 2069 | 1216 | 201 | 652 | 58.8% | 9.7% |
| n0shake/Public-APIs | 480 | 353 | 32 | 95 | 73.5% | 6.7% |
| public-api-lists/public-api-lists | 837 | 708 | 28 | 101 | 84.6% | 3.3% |
| public-apis/public-apis | 1812 | 1366 | 135 | 311 | 75.4% | 7.5% |
