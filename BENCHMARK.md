# Benchmark

_Measured 2026-11-26 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3816 | 325 | 1155 | 72.1% | 6.1% |
| APIs.guru | 2069 | 1239 | 178 | 652 | 59.9% | 8.6% |
| n0shake/Public-APIs | 480 | 355 | 28 | 97 | 74% | 5.8% |
| public-api-lists/public-api-lists | 837 | 695 | 29 | 113 | 83% | 3.5% |
| public-apis/public-apis | 2539 | 2053 | 106 | 380 | 80.9% | 4.2% |
