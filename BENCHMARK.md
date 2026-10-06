# Benchmark

_Measured 2026-10-06 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3333 | 359 | 1109 | 69.4% | 7.5% |
| APIs.guru | 2069 | 1223 | 197 | 649 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 357 | 29 | 94 | 74.4% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 27 | 104 | 84.3% | 3.2% |
| public-apis/public-apis | 2042 | 1571 | 127 | 344 | 76.9% | 6.2% |
