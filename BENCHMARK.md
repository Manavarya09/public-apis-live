# Benchmark

_Measured 2026-11-07 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5095 | 3637 | 324 | 1134 | 71.4% | 6.4% |
| APIs.guru | 2069 | 1222 | 193 | 654 | 59.1% | 9.3% |
| n0shake/Public-APIs | 480 | 356 | 26 | 98 | 74.2% | 5.4% |
| public-api-lists/public-api-lists | 837 | 703 | 27 | 107 | 84% | 3.2% |
| public-apis/public-apis | 2338 | 1888 | 92 | 358 | 80.8% | 3.9% |
