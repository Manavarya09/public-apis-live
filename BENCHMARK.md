# Benchmark

_Measured 2026-10-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3484 | 329 | 1129 | 70.5% | 6.7% |
| APIs.guru | 2069 | 1221 | 196 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 28 | 96 | 74.2% | 5.8% |
| public-api-lists/public-api-lists | 837 | 704 | 28 | 105 | 84.1% | 3.3% |
| public-apis/public-apis | 2184 | 1729 | 94 | 361 | 79.2% | 4.3% |
