# Benchmark

_Measured 2026-10-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4925 | 3465 | 323 | 1137 | 70.4% | 6.6% |
| APIs.guru | 2069 | 1212 | 196 | 661 | 58.6% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 26 | 99 | 74% | 5.4% |
| public-api-lists/public-api-lists | 837 | 708 | 25 | 104 | 84.6% | 3% |
| public-apis/public-apis | 2167 | 1720 | 90 | 357 | 79.4% | 4.2% |
