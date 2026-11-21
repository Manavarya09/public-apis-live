# Benchmark

_Measured 2026-11-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5268 | 3775 | 323 | 1170 | 71.7% | 6.1% |
| APIs.guru | 2069 | 1237 | 179 | 653 | 59.8% | 8.7% |
| n0shake/Public-APIs | 480 | 354 | 26 | 100 | 73.8% | 5.4% |
| public-api-lists/public-api-lists | 837 | 688 | 34 | 115 | 82.2% | 4.1% |
| public-apis/public-apis | 2511 | 2019 | 100 | 392 | 80.4% | 4% |
