# Benchmark

_Measured 2026-10-14 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4853 | 3298 | 334 | 1221 | 68% | 6.9% |
| APIs.guru | 2069 | 1219 | 196 | 654 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 319 | 26 | 135 | 66.5% | 5.4% |
| public-api-lists/public-api-lists | 837 | 693 | 26 | 118 | 82.8% | 3.1% |
| public-apis/public-apis | 2095 | 1572 | 107 | 416 | 75% | 5.1% |
