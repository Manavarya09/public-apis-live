# Benchmark

_Measured 2026-06-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2844 | 362 | 1075 | 66.4% | 8.5% |
| APIs.guru | 2069 | 1181 | 202 | 686 | 57.1% | 9.8% |
| n0shake/Public-APIs | 480 | 357 | 28 | 95 | 74.4% | 5.8% |
| public-api-lists/public-api-lists | 775 | 650 | 26 | 99 | 83.9% | 3.4% |
| public-apis/public-apis | 1561 | 1162 | 124 | 275 | 74.4% | 7.9% |
