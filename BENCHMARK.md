# Benchmark

_Measured 2026-10-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4902 | 3449 | 321 | 1132 | 70.4% | 6.5% |
| APIs.guru | 2069 | 1222 | 196 | 651 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 361 | 27 | 92 | 75.2% | 5.6% |
| public-api-lists/public-api-lists | 837 | 709 | 22 | 106 | 84.7% | 2.6% |
| public-apis/public-apis | 2144 | 1689 | 88 | 367 | 78.8% | 4.1% |
