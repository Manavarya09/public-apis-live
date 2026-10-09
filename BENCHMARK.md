# Benchmark

_Measured 2026-10-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3326 | 354 | 1121 | 69.3% | 7.4% |
| APIs.guru | 2069 | 1222 | 197 | 650 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 704 | 25 | 108 | 84.1% | 3% |
| public-apis/public-apis | 2042 | 1567 | 123 | 352 | 76.7% | 6% |
