# Benchmark

_Measured 2026-09-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3204 | 357 | 1086 | 68.9% | 7.7% |
| APIs.guru | 2069 | 1223 | 193 | 653 | 59.1% | 9.3% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 713 | 24 | 100 | 85.2% | 2.9% |
| public-apis/public-apis | 1887 | 1436 | 132 | 319 | 76.1% | 7% |
