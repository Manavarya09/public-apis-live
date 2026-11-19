# Benchmark

_Measured 2026-11-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5240 | 3759 | 322 | 1159 | 71.7% | 6.1% |
| APIs.guru | 2069 | 1233 | 179 | 657 | 59.6% | 8.7% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 693 | 29 | 115 | 82.8% | 3.5% |
| public-apis/public-apis | 2483 | 2000 | 103 | 380 | 80.5% | 4.1% |
