# Benchmark

_Measured 2026-11-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3811 | 324 | 1161 | 72% | 6.1% |
| APIs.guru | 2069 | 1229 | 177 | 663 | 59.4% | 8.6% |
| n0shake/Public-APIs | 480 | 356 | 27 | 97 | 74.2% | 5.6% |
| public-api-lists/public-api-lists | 837 | 692 | 30 | 115 | 82.7% | 3.6% |
| public-apis/public-apis | 2539 | 2059 | 106 | 374 | 81.1% | 4.2% |
