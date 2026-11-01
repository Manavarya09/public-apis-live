# Benchmark

_Measured 2026-11-01 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3578 | 332 | 1121 | 71.1% | 6.6% |
| APIs.guru | 2069 | 1218 | 197 | 654 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 27 | 99 | 73.8% | 5.6% |
| public-api-lists/public-api-lists | 837 | 709 | 25 | 103 | 84.7% | 3% |
| public-apis/public-apis | 2273 | 1829 | 96 | 348 | 80.5% | 4.2% |
