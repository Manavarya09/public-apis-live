# Benchmark

_Measured 2026-09-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4508 | 3063 | 366 | 1079 | 67.9% | 8.1% |
| APIs.guru | 2069 | 1219 | 200 | 650 | 58.9% | 9.7% |
| n0shake/Public-APIs | 480 | 353 | 33 | 94 | 73.5% | 6.9% |
| public-api-lists/public-api-lists | 802 | 677 | 24 | 101 | 84.4% | 3% |
| public-apis/public-apis | 1769 | 1317 | 134 | 318 | 74.4% | 7.6% |
