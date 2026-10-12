# Benchmark

_Measured 2026-10-12 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4838 | 3361 | 335 | 1142 | 69.5% | 6.9% |
| APIs.guru | 2069 | 1221 | 196 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 351 | 29 | 100 | 73.1% | 6% |
| public-api-lists/public-api-lists | 837 | 705 | 26 | 106 | 84.2% | 3.1% |
| public-apis/public-apis | 2080 | 1604 | 103 | 373 | 77.1% | 5% |
