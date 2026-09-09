# Benchmark

_Measured 2026-09-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4494 | 3054 | 362 | 1078 | 68% | 8.1% |
| APIs.guru | 2069 | 1216 | 199 | 654 | 58.8% | 9.6% |
| n0shake/Public-APIs | 480 | 354 | 32 | 94 | 73.8% | 6.7% |
| public-api-lists/public-api-lists | 802 | 677 | 23 | 102 | 84.4% | 2.9% |
| public-apis/public-apis | 1755 | 1311 | 131 | 313 | 74.7% | 7.5% |
