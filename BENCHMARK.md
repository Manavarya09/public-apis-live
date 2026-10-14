# Benchmark

_Measured 2026-10-14 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4853 | 3377 | 347 | 1129 | 69.6% | 7.2% |
| APIs.guru | 2069 | 1221 | 198 | 650 | 59% | 9.6% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 704 | 26 | 107 | 84.1% | 3.1% |
| public-apis/public-apis | 2095 | 1616 | 113 | 366 | 77.1% | 5.4% |
