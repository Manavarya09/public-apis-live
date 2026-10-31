# Benchmark

_Measured 2026-10-31 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5011 | 3552 | 327 | 1132 | 70.9% | 6.5% |
| APIs.guru | 2069 | 1219 | 195 | 655 | 58.9% | 9.4% |
| n0shake/Public-APIs | 480 | 356 | 27 | 97 | 74.2% | 5.6% |
| public-api-lists/public-api-lists | 837 | 708 | 24 | 105 | 84.6% | 2.9% |
| public-apis/public-apis | 2253 | 1801 | 94 | 358 | 79.9% | 4.2% |
