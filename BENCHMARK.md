# Benchmark

_Measured 2026-06-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2826 | 360 | 1099 | 66% | 8.4% |
| APIs.guru | 2069 | 1177 | 202 | 690 | 56.9% | 9.8% |
| n0shake/Public-APIs | 480 | 358 | 28 | 94 | 74.6% | 5.8% |
| public-api-lists/public-api-lists | 775 | 641 | 27 | 107 | 82.7% | 3.5% |
| public-apis/public-apis | 1565 | 1146 | 122 | 297 | 73.2% | 7.8% |
