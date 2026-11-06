# Benchmark

_Measured 2026-11-06 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5095 | 3631 | 330 | 1134 | 71.3% | 6.5% |
| APIs.guru | 2069 | 1218 | 195 | 656 | 58.9% | 9.4% |
| n0shake/Public-APIs | 480 | 353 | 27 | 100 | 73.5% | 5.6% |
| public-api-lists/public-api-lists | 837 | 703 | 28 | 106 | 84% | 3.3% |
| public-apis/public-apis | 2338 | 1888 | 95 | 355 | 80.8% | 4.1% |
