# Benchmark

_Measured 2026-09-26 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4673 | 3108 | 357 | 1208 | 66.5% | 7.6% |
| APIs.guru | 2069 | 1132 | 191 | 746 | 54.7% | 9.2% |
| n0shake/Public-APIs | 480 | 346 | 30 | 104 | 72.1% | 6.3% |
| public-api-lists/public-api-lists | 837 | 712 | 24 | 101 | 85.1% | 2.9% |
| public-apis/public-apis | 1913 | 1437 | 134 | 342 | 75.1% | 7% |
