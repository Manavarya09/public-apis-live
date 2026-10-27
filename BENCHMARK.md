# Benchmark

_Measured 2026-10-27 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3495 | 333 | 1138 | 70.4% | 6.7% |
| APIs.guru | 2069 | 1219 | 197 | 653 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 344 | 28 | 108 | 71.7% | 5.8% |
| public-api-lists/public-api-lists | 837 | 701 | 27 | 109 | 83.8% | 3.2% |
| public-apis/public-apis | 2208 | 1755 | 97 | 356 | 79.5% | 4.4% |
