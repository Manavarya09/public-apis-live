# Benchmark

_Measured 2026-09-10 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4504 | 3066 | 361 | 1077 | 68.1% | 8% |
| APIs.guru | 2069 | 1220 | 201 | 648 | 59% | 9.7% |
| n0shake/Public-APIs | 480 | 353 | 32 | 95 | 73.5% | 6.7% |
| public-api-lists/public-api-lists | 802 | 676 | 22 | 104 | 84.3% | 2.7% |
| public-apis/public-apis | 1765 | 1320 | 129 | 316 | 74.8% | 7.3% |
