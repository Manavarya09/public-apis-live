# Benchmark

_Measured 2026-11-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3713 | 325 | 1174 | 71.2% | 6.2% |
| APIs.guru | 2069 | 1230 | 180 | 659 | 59.4% | 8.7% |
| n0shake/Public-APIs | 480 | 351 | 27 | 102 | 73.1% | 5.6% |
| public-api-lists/public-api-lists | 837 | 689 | 29 | 119 | 82.3% | 3.5% |
| public-apis/public-apis | 2455 | 1960 | 105 | 390 | 79.8% | 4.3% |
