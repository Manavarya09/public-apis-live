# Benchmark

_Measured 2026-06-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2741 | 366 | 1178 | 64% | 8.5% |
| APIs.guru | 2069 | 1089 | 206 | 774 | 52.6% | 10% |
| n0shake/Public-APIs | 480 | 357 | 30 | 93 | 74.4% | 6.3% |
| public-api-lists/public-api-lists | 775 | 645 | 26 | 104 | 83.2% | 3.4% |
| public-apis/public-apis | 1565 | 1150 | 122 | 293 | 73.5% | 7.8% |
