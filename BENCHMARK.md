# Benchmark

_Measured 2026-06-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2694 | 362 | 1225 | 62.9% | 8.5% |
| APIs.guru | 2069 | 1029 | 203 | 837 | 49.7% | 9.8% |
| n0shake/Public-APIs | 480 | 359 | 30 | 91 | 74.8% | 6.3% |
| public-api-lists/public-api-lists | 775 | 648 | 28 | 99 | 83.6% | 3.6% |
| public-apis/public-apis | 1561 | 1163 | 120 | 278 | 74.5% | 7.7% |
