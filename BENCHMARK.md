# Benchmark

_Measured 2026-11-04 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5062 | 3601 | 324 | 1137 | 71.1% | 6.4% |
| APIs.guru | 2069 | 1217 | 194 | 658 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 705 | 26 | 106 | 84.2% | 3.1% |
| public-apis/public-apis | 2304 | 1856 | 90 | 358 | 80.6% | 3.9% |
