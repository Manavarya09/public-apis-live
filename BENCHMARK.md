# Benchmark

_Measured 2026-09-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4656 | 3155 | 361 | 1140 | 67.8% | 7.8% |
| APIs.guru | 2069 | 1178 | 193 | 698 | 56.9% | 9.3% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 712 | 26 | 99 | 85.1% | 3.1% |
| public-apis/public-apis | 1896 | 1429 | 136 | 331 | 75.4% | 7.2% |
