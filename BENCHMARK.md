# Benchmark

_Measured 2026-09-25 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4673 | 3201 | 358 | 1114 | 68.5% | 7.7% |
| APIs.guru | 2069 | 1221 | 193 | 655 | 59% | 9.3% |
| n0shake/Public-APIs | 480 | 352 | 29 | 99 | 73.3% | 6% |
| public-api-lists/public-api-lists | 837 | 712 | 25 | 100 | 85.1% | 3% |
| public-apis/public-apis | 1913 | 1437 | 132 | 344 | 75.1% | 6.9% |
