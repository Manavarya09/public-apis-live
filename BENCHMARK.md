# Benchmark

_Measured 2026-10-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4874 | 3428 | 324 | 1122 | 70.3% | 6.6% |
| APIs.guru | 2069 | 1218 | 198 | 653 | 58.9% | 9.6% |
| n0shake/Public-APIs | 480 | 356 | 27 | 97 | 74.2% | 5.6% |
| public-api-lists/public-api-lists | 837 | 709 | 24 | 104 | 84.7% | 2.9% |
| public-apis/public-apis | 2116 | 1675 | 89 | 352 | 79.2% | 4.2% |
