# Benchmark

_Measured 2026-10-13 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4853 | 3333 | 338 | 1182 | 68.7% | 7% |
| APIs.guru | 2069 | 1208 | 197 | 664 | 58.4% | 9.5% |
| n0shake/Public-APIs | 480 | 352 | 28 | 100 | 73.3% | 5.8% |
| public-api-lists/public-api-lists | 837 | 686 | 25 | 126 | 82% | 3% |
| public-apis/public-apis | 2095 | 1605 | 106 | 384 | 76.6% | 5.1% |
