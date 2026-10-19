# Benchmark

_Measured 2026-10-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4933 | 3465 | 320 | 1148 | 70.2% | 6.5% |
| APIs.guru | 2069 | 1216 | 197 | 656 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 25 | 100 | 74% | 5.2% |
| public-api-lists/public-api-lists | 837 | 705 | 25 | 107 | 84.2% | 3% |
| public-apis/public-apis | 2175 | 1715 | 87 | 373 | 78.9% | 4% |
