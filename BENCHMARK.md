# Benchmark

_Measured 2026-09-30 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4714 | 3226 | 364 | 1124 | 68.4% | 7.7% |
| APIs.guru | 2069 | 1208 | 195 | 666 | 58.4% | 9.4% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 703 | 29 | 105 | 84% | 3.5% |
| public-apis/public-apis | 1954 | 1478 | 135 | 341 | 75.6% | 6.9% |
