# Benchmark

_Measured 2026-06-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2866 | 355 | 1064 | 66.9% | 8.3% |
| APIs.guru | 2069 | 1210 | 202 | 657 | 58.5% | 9.8% |
| n0shake/Public-APIs | 480 | 347 | 25 | 108 | 72.3% | 5.2% |
| public-api-lists/public-api-lists | 775 | 649 | 27 | 99 | 83.7% | 3.5% |
| public-apis/public-apis | 1565 | 1164 | 119 | 282 | 74.4% | 7.6% |
