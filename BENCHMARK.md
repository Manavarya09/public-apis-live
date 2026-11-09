# Benchmark

_Measured 2026-11-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5124 | 3640 | 322 | 1162 | 71% | 6.3% |
| APIs.guru | 2069 | 1214 | 194 | 661 | 58.7% | 9.4% |
| n0shake/Public-APIs | 480 | 350 | 25 | 105 | 72.9% | 5.2% |
| public-api-lists/public-api-lists | 837 | 697 | 25 | 115 | 83.3% | 3% |
| public-apis/public-apis | 2367 | 1910 | 92 | 365 | 80.7% | 3.9% |
