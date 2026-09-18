# Benchmark

_Measured 2026-09-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4592 | 3138 | 366 | 1088 | 68.3% | 8% |
| APIs.guru | 2069 | 1215 | 197 | 657 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 709 | 29 | 99 | 84.7% | 3.5% |
| public-apis/public-apis | 1829 | 1377 | 135 | 317 | 75.3% | 7.4% |
