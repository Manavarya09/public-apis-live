# Benchmark

_Measured 2026-11-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3737 | 311 | 1164 | 71.7% | 6% |
| APIs.guru | 2069 | 1239 | 175 | 655 | 59.9% | 8.5% |
| n0shake/Public-APIs | 480 | 359 | 25 | 96 | 74.8% | 5.2% |
| public-api-lists/public-api-lists | 837 | 689 | 29 | 119 | 82.3% | 3.5% |
| public-apis/public-apis | 2455 | 1973 | 96 | 386 | 80.4% | 3.9% |
