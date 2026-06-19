# Benchmark

_Measured 2026-06-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2892 | 357 | 1032 | 67.6% | 8.3% |
| APIs.guru | 2069 | 1218 | 203 | 648 | 58.9% | 9.8% |
| n0shake/Public-APIs | 480 | 363 | 26 | 91 | 75.6% | 5.4% |
| public-api-lists/public-api-lists | 775 | 650 | 26 | 99 | 83.9% | 3.4% |
| public-apis/public-apis | 1561 | 1167 | 119 | 275 | 74.8% | 7.6% |
