# Benchmark

_Measured 2026-10-05 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4783 | 3319 | 358 | 1106 | 69.4% | 7.5% |
| APIs.guru | 2069 | 1223 | 195 | 651 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 357 | 29 | 94 | 74.4% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 25 | 102 | 84.8% | 3% |
| public-apis/public-apis | 2024 | 1553 | 129 | 342 | 76.7% | 6.4% |
