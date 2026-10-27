# Benchmark

_Measured 2026-10-27 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3442 | 331 | 1193 | 69.3% | 6.7% |
| APIs.guru | 2069 | 1162 | 197 | 710 | 56.2% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 25 | 106 | 84.3% | 3% |
| public-apis/public-apis | 2208 | 1748 | 94 | 366 | 79.2% | 4.3% |
