# Benchmark

_Measured 2026-10-03 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4751 | 3289 | 362 | 1100 | 69.2% | 7.6% |
| APIs.guru | 2069 | 1219 | 197 | 653 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 709 | 27 | 101 | 84.7% | 3.2% |
| public-apis/public-apis | 1990 | 1527 | 130 | 333 | 76.7% | 6.5% |
