# Benchmark

_Measured 2026-11-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5124 | 3641 | 333 | 1150 | 71.1% | 6.5% |
| APIs.guru | 2069 | 1216 | 195 | 658 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 350 | 28 | 102 | 72.9% | 5.8% |
| public-api-lists/public-api-lists | 837 | 696 | 26 | 115 | 83.2% | 3.1% |
| public-apis/public-apis | 2367 | 1903 | 100 | 364 | 80.4% | 4.2% |
