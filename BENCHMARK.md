# Benchmark

_Measured 2026-11-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5150 | 3679 | 341 | 1130 | 71.4% | 6.6% |
| APIs.guru | 2069 | 1218 | 196 | 655 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 28 | 96 | 74.2% | 5.8% |
| public-api-lists/public-api-lists | 837 | 698 | 31 | 108 | 83.4% | 3.7% |
| public-apis/public-apis | 2393 | 1935 | 103 | 355 | 80.9% | 4.3% |
