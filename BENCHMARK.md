# Benchmark

_Measured 2026-11-04 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3561 | 328 | 1142 | 70.8% | 6.5% |
| APIs.guru | 2069 | 1218 | 197 | 654 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 352 | 27 | 101 | 73.3% | 5.6% |
| public-api-lists/public-api-lists | 837 | 700 | 27 | 110 | 83.6% | 3.2% |
| public-apis/public-apis | 2273 | 1819 | 91 | 363 | 80% | 4% |
