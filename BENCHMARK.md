# Benchmark

_Measured 2026-10-02 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4728 | 3256 | 363 | 1109 | 68.9% | 7.7% |
| APIs.guru | 2069 | 1223 | 196 | 650 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 357 | 29 | 94 | 74.4% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 26 | 105 | 84.3% | 3.1% |
| public-apis/public-apis | 1967 | 1489 | 133 | 345 | 75.7% | 6.8% |
