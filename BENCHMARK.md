# Benchmark

_Measured 2026-10-02 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4728 | 3242 | 359 | 1127 | 68.6% | 7.6% |
| APIs.guru | 2069 | 1216 | 195 | 658 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 357 | 27 | 96 | 74.4% | 5.6% |
| public-api-lists/public-api-lists | 837 | 707 | 26 | 104 | 84.5% | 3.1% |
| public-apis/public-apis | 1967 | 1482 | 129 | 356 | 75.3% | 6.6% |
