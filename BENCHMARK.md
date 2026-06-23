# Benchmark

_Measured 2026-06-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2863 | 364 | 1058 | 66.8% | 8.5% |
| APIs.guru | 2069 | 1213 | 203 | 653 | 58.6% | 9.8% |
| n0shake/Public-APIs | 480 | 351 | 28 | 101 | 73.1% | 5.8% |
| public-api-lists/public-api-lists | 775 | 644 | 27 | 104 | 83.1% | 3.5% |
| public-apis/public-apis | 1565 | 1155 | 124 | 286 | 73.8% | 7.9% |
