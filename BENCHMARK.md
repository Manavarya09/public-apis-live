# Benchmark

_Measured 2026-06-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2862 | 373 | 1050 | 66.8% | 8.7% |
| APIs.guru | 2069 | 1207 | 211 | 651 | 58.3% | 10.2% |
| n0shake/Public-APIs | 480 | 359 | 29 | 92 | 74.8% | 6% |
| public-api-lists/public-api-lists | 775 | 642 | 26 | 107 | 82.8% | 3.4% |
| public-apis/public-apis | 1565 | 1154 | 124 | 287 | 73.7% | 7.9% |
