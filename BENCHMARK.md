# Benchmark

_Measured 2026-11-12 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5150 | 3698 | 315 | 1137 | 71.8% | 6.1% |
| APIs.guru | 2069 | 1231 | 179 | 659 | 59.5% | 8.7% |
| n0shake/Public-APIs | 480 | 357 | 25 | 98 | 74.4% | 5.2% |
| public-api-lists/public-api-lists | 837 | 697 | 29 | 111 | 83.3% | 3.5% |
| public-apis/public-apis | 2393 | 1943 | 95 | 355 | 81.2% | 4% |
