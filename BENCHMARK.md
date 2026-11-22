# Benchmark

_Measured 2026-11-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3801 | 328 | 1167 | 71.8% | 6.2% |
| APIs.guru | 2069 | 1231 | 179 | 659 | 59.5% | 8.7% |
| n0shake/Public-APIs | 480 | 349 | 26 | 105 | 72.7% | 5.4% |
| public-api-lists/public-api-lists | 837 | 694 | 32 | 111 | 82.9% | 3.8% |
| public-apis/public-apis | 2539 | 2051 | 108 | 380 | 80.8% | 4.3% |
