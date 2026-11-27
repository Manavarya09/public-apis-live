# Benchmark

_Measured 2026-11-27 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5304 | 3823 | 324 | 1157 | 72.1% | 6.1% |
| APIs.guru | 2069 | 1241 | 179 | 649 | 60% | 8.7% |
| n0shake/Public-APIs | 480 | 357 | 27 | 96 | 74.4% | 5.6% |
| public-api-lists/public-api-lists | 837 | 694 | 28 | 115 | 82.9% | 3.3% |
| public-apis/public-apis | 2547 | 2057 | 105 | 385 | 80.8% | 4.1% |
