# Benchmark

_Measured 2026-09-13 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4537 | 3089 | 363 | 1085 | 68.1% | 8% |
| APIs.guru | 2069 | 1222 | 196 | 651 | 59.1% | 9.5% |
| n0shake/Public-APIs | 480 | 353 | 32 | 95 | 73.5% | 6.7% |
| public-api-lists/public-api-lists | 802 | 671 | 26 | 105 | 83.7% | 3.2% |
| public-apis/public-apis | 1798 | 1344 | 134 | 320 | 74.7% | 7.5% |
