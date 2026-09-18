# Benchmark

_Measured 2026-09-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4592 | 3130 | 365 | 1097 | 68.2% | 7.9% |
| APIs.guru | 2069 | 1218 | 198 | 653 | 58.9% | 9.6% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 704 | 28 | 105 | 84.1% | 3.3% |
| public-apis/public-apis | 1829 | 1366 | 134 | 329 | 74.7% | 7.3% |
