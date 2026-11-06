# Benchmark

_Measured 2026-11-06 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5095 | 3611 | 330 | 1154 | 70.9% | 6.5% |
| APIs.guru | 2069 | 1217 | 195 | 657 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 354 | 27 | 99 | 73.8% | 5.6% |
| public-api-lists/public-api-lists | 837 | 698 | 29 | 110 | 83.4% | 3.5% |
| public-apis/public-apis | 2338 | 1868 | 94 | 376 | 79.9% | 4% |
