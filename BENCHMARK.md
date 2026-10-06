# Benchmark

_Measured 2026-10-06 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4801 | 3316 | 358 | 1127 | 69.1% | 7.5% |
| APIs.guru | 2069 | 1215 | 195 | 659 | 58.7% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 703 | 27 | 107 | 84% | 3.2% |
| public-apis/public-apis | 2042 | 1562 | 129 | 351 | 76.5% | 6.3% |
