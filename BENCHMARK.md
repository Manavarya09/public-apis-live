# Benchmark

_Measured 2026-10-25 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3498 | 333 | 1135 | 70.4% | 6.7% |
| APIs.guru | 2069 | 1221 | 197 | 651 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 352 | 29 | 99 | 73.3% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 28 | 103 | 84.3% | 3.3% |
| public-apis/public-apis | 2208 | 1748 | 96 | 364 | 79.2% | 4.3% |
