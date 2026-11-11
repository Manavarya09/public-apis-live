# Benchmark

_Measured 2026-11-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5124 | 3651 | 330 | 1143 | 71.3% | 6.4% |
| APIs.guru | 2069 | 1216 | 196 | 657 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 699 | 27 | 111 | 83.5% | 3.2% |
| public-apis/public-apis | 2367 | 1912 | 93 | 362 | 80.8% | 3.9% |
