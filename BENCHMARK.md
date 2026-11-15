# Benchmark

_Measured 2026-11-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5183 | 3727 | 319 | 1137 | 71.9% | 6.2% |
| APIs.guru | 2069 | 1237 | 179 | 653 | 59.8% | 8.7% |
| n0shake/Public-APIs | 480 | 354 | 26 | 100 | 73.8% | 5.4% |
| public-api-lists/public-api-lists | 837 | 691 | 31 | 115 | 82.6% | 3.7% |
| public-apis/public-apis | 2426 | 1968 | 99 | 359 | 81.1% | 4.1% |
