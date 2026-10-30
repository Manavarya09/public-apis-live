# Benchmark

_Measured 2026-10-30 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5011 | 3549 | 320 | 1142 | 70.8% | 6.4% |
| APIs.guru | 2069 | 1214 | 197 | 658 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 27 | 97 | 74.2% | 5.6% |
| public-api-lists/public-api-lists | 837 | 706 | 23 | 108 | 84.3% | 2.7% |
| public-apis/public-apis | 2253 | 1802 | 85 | 366 | 80% | 3.8% |
