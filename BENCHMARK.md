# Benchmark

_Measured 2026-09-27 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4697 | 3225 | 363 | 1109 | 68.7% | 7.7% |
| APIs.guru | 2069 | 1223 | 192 | 654 | 59.1% | 9.3% |
| n0shake/Public-APIs | 480 | 353 | 30 | 97 | 73.5% | 6.3% |
| public-api-lists/public-api-lists | 837 | 711 | 27 | 99 | 84.9% | 3.2% |
| public-apis/public-apis | 1938 | 1461 | 136 | 341 | 75.4% | 7% |
