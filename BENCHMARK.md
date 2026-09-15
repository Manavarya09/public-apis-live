# Benchmark

_Measured 2026-09-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4574 | 3118 | 366 | 1090 | 68.2% | 8% |
| APIs.guru | 2069 | 1211 | 200 | 658 | 58.5% | 9.7% |
| n0shake/Public-APIs | 480 | 353 | 31 | 96 | 73.5% | 6.5% |
| public-api-lists/public-api-lists | 837 | 708 | 27 | 102 | 84.6% | 3.2% |
| public-apis/public-apis | 1811 | 1364 | 131 | 316 | 75.3% | 7.2% |
