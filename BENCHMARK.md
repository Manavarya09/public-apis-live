# Benchmark

_Measured 2026-09-07 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4491 | 3049 | 360 | 1082 | 67.9% | 8% |
| APIs.guru | 2069 | 1215 | 197 | 657 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 351 | 30 | 99 | 73.1% | 6.3% |
| public-api-lists/public-api-lists | 802 | 678 | 24 | 100 | 84.5% | 3% |
| public-apis/public-apis | 1752 | 1307 | 133 | 312 | 74.6% | 7.6% |
