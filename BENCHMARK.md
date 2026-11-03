# Benchmark

_Measured 2026-11-03 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3569 | 327 | 1135 | 70.9% | 6.5% |
| APIs.guru | 2069 | 1217 | 197 | 655 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 28 | 96 | 74.2% | 5.8% |
| public-api-lists/public-api-lists | 837 | 706 | 25 | 106 | 84.3% | 3% |
| public-apis/public-apis | 2273 | 1821 | 90 | 362 | 80.1% | 4% |
