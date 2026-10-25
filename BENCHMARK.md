# Benchmark

_Measured 2026-10-25 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3498 | 331 | 1137 | 70.4% | 6.7% |
| APIs.guru | 2069 | 1221 | 195 | 653 | 59% | 9.4% |
| n0shake/Public-APIs | 480 | 352 | 29 | 99 | 73.3% | 6% |
| public-api-lists/public-api-lists | 837 | 706 | 27 | 104 | 84.3% | 3.2% |
| public-apis/public-apis | 2208 | 1748 | 97 | 363 | 79.2% | 4.4% |
