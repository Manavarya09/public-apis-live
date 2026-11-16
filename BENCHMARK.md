# Benchmark

_Measured 2026-11-16 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3756 | 317 | 1139 | 72.1% | 6.1% |
| APIs.guru | 2069 | 1236 | 176 | 657 | 59.7% | 8.5% |
| n0shake/Public-APIs | 480 | 357 | 25 | 98 | 74.4% | 5.2% |
| public-api-lists/public-api-lists | 837 | 694 | 31 | 112 | 82.9% | 3.7% |
| public-apis/public-apis | 2455 | 1997 | 99 | 359 | 81.3% | 4% |
