# Benchmark

_Measured 2026-09-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4575 | 3129 | 364 | 1082 | 68.4% | 8% |
| APIs.guru | 2069 | 1220 | 197 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 357 | 30 | 93 | 74.4% | 6.3% |
| public-api-lists/public-api-lists | 837 | 708 | 26 | 103 | 84.6% | 3.1% |
| public-apis/public-apis | 1812 | 1360 | 134 | 318 | 75.1% | 7.4% |
