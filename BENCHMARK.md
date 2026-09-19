# Benchmark

_Measured 2026-09-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4609 | 3152 | 364 | 1093 | 68.4% | 7.9% |
| APIs.guru | 2069 | 1216 | 195 | 658 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 353 | 31 | 96 | 73.5% | 6.5% |
| public-api-lists/public-api-lists | 837 | 706 | 28 | 103 | 84.3% | 3.3% |
| public-apis/public-apis | 1846 | 1390 | 135 | 321 | 75.3% | 7.3% |
