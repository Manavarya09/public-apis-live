# Benchmark

_Measured 2026-10-04 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4782 | 3314 | 359 | 1109 | 69.3% | 7.5% |
| APIs.guru | 2069 | 1222 | 195 | 652 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 358 | 29 | 93 | 74.6% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 27 | 103 | 84.5% | 3.2% |
| public-apis/public-apis | 2023 | 1548 | 130 | 345 | 76.5% | 6.4% |
