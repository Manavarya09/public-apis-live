# Benchmark

_Measured 2026-11-28 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5304 | 3813 | 325 | 1166 | 71.9% | 6.1% |
| APIs.guru | 2069 | 1237 | 179 | 653 | 59.8% | 8.7% |
| n0shake/Public-APIs | 480 | 356 | 26 | 98 | 74.2% | 5.4% |
| public-api-lists/public-api-lists | 837 | 689 | 30 | 118 | 82.3% | 3.6% |
| public-apis/public-apis | 2547 | 2054 | 105 | 388 | 80.6% | 4.1% |
