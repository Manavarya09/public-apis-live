# Benchmark

_Measured 2026-09-12 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4508 | 3053 | 366 | 1089 | 67.7% | 8.1% |
| APIs.guru | 2069 | 1211 | 200 | 658 | 58.5% | 9.7% |
| n0shake/Public-APIs | 480 | 351 | 31 | 98 | 73.1% | 6.5% |
| public-api-lists/public-api-lists | 802 | 672 | 26 | 104 | 83.8% | 3.2% |
| public-apis/public-apis | 1769 | 1319 | 134 | 316 | 74.6% | 7.6% |
