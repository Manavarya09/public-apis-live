# Benchmark

_Measured 2026-10-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4902 | 3432 | 325 | 1145 | 70% | 6.6% |
| APIs.guru | 2069 | 1198 | 197 | 674 | 57.9% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 28 | 96 | 74.2% | 5.8% |
| public-api-lists/public-api-lists | 837 | 713 | 24 | 100 | 85.2% | 2.9% |
| public-apis/public-apis | 2144 | 1699 | 90 | 355 | 79.2% | 4.2% |
