# Benchmark

_Measured 2026-09-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4592 | 3125 | 366 | 1101 | 68.1% | 8% |
| APIs.guru | 2069 | 1210 | 197 | 662 | 58.5% | 9.5% |
| n0shake/Public-APIs | 480 | 353 | 30 | 97 | 73.5% | 6.3% |
| public-api-lists/public-api-lists | 837 | 709 | 28 | 100 | 84.7% | 3.3% |
| public-apis/public-apis | 1829 | 1366 | 135 | 328 | 74.7% | 7.4% |
