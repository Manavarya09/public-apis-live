# Benchmark

_Measured 2026-11-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3805 | 321 | 1170 | 71.8% | 6.1% |
| APIs.guru | 2069 | 1233 | 179 | 657 | 59.6% | 8.7% |
| n0shake/Public-APIs | 480 | 357 | 26 | 97 | 74.4% | 5.4% |
| public-api-lists/public-api-lists | 837 | 686 | 27 | 124 | 82% | 3.2% |
| public-apis/public-apis | 2539 | 2053 | 102 | 384 | 80.9% | 4% |
