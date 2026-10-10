# Benchmark

_Measured 2026-10-10 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3319 | 367 | 1115 | 69.1% | 7.6% |
| APIs.guru | 2069 | 1225 | 195 | 649 | 59.2% | 9.4% |
| n0shake/Public-APIs | 480 | 356 | 30 | 94 | 74.2% | 6.3% |
| public-api-lists/public-api-lists | 837 | 703 | 28 | 106 | 84% | 3.3% |
| public-apis/public-apis | 2042 | 1556 | 137 | 349 | 76.2% | 6.7% |
