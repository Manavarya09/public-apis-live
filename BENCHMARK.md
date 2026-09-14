# Benchmark

_Measured 2026-09-14 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4559 | 3102 | 367 | 1090 | 68% | 8.1% |
| APIs.guru | 2069 | 1213 | 200 | 656 | 58.6% | 9.7% |
| n0shake/Public-APIs | 480 | 352 | 31 | 97 | 73.3% | 6.5% |
| public-api-lists/public-api-lists | 837 | 710 | 26 | 101 | 84.8% | 3.1% |
| public-apis/public-apis | 1798 | 1344 | 134 | 320 | 74.7% | 7.5% |
