# Benchmark

_Measured 2026-10-07 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3339 | 357 | 1105 | 69.5% | 7.4% |
| APIs.guru | 2069 | 1224 | 195 | 650 | 59.2% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 709 | 27 | 101 | 84.7% | 3.2% |
| public-apis/public-apis | 2042 | 1577 | 127 | 338 | 77.2% | 6.2% |
