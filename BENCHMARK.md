# Benchmark

_Measured 2026-06-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2817 | 364 | 1100 | 65.8% | 8.5% |
| APIs.guru | 2069 | 1153 | 199 | 717 | 55.7% | 9.6% |
| n0shake/Public-APIs | 480 | 361 | 30 | 89 | 75.2% | 6.3% |
| public-api-lists/public-api-lists | 775 | 652 | 28 | 95 | 84.1% | 3.6% |
| public-apis/public-apis | 1561 | 1161 | 125 | 275 | 74.4% | 8% |
