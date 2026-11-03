# Benchmark

_Measured 2026-11-03 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3572 | 328 | 1131 | 71% | 6.5% |
| APIs.guru | 2069 | 1212 | 198 | 659 | 58.6% | 9.6% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 706 | 25 | 106 | 84.3% | 3% |
| public-apis/public-apis | 2273 | 1830 | 91 | 352 | 80.5% | 4% |
