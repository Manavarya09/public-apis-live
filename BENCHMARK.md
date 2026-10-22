# Benchmark

_Measured 2026-10-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3480 | 331 | 1131 | 70.4% | 6.7% |
| APIs.guru | 2069 | 1215 | 196 | 658 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 352 | 31 | 97 | 73.3% | 6.5% |
| public-api-lists/public-api-lists | 837 | 710 | 25 | 102 | 84.8% | 3% |
| public-apis/public-apis | 2184 | 1732 | 96 | 356 | 79.3% | 4.4% |
