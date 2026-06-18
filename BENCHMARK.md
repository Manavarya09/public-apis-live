# Benchmark

_Measured 2026-06-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2766 | 352 | 1163 | 64.6% | 8.2% |
| APIs.guru | 2069 | 1133 | 199 | 737 | 54.8% | 9.6% |
| n0shake/Public-APIs | 480 | 350 | 29 | 101 | 72.9% | 6% |
| public-api-lists/public-api-lists | 775 | 642 | 26 | 107 | 82.8% | 3.4% |
| public-apis/public-apis | 1561 | 1137 | 118 | 306 | 72.8% | 7.6% |
