# Benchmark

_Measured 2026-11-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3749 | 315 | 1148 | 71.9% | 6% |
| APIs.guru | 2069 | 1229 | 177 | 663 | 59.4% | 8.6% |
| n0shake/Public-APIs | 480 | 356 | 26 | 98 | 74.2% | 5.4% |
| public-api-lists/public-api-lists | 837 | 697 | 29 | 111 | 83.3% | 3.5% |
| public-apis/public-apis | 2455 | 1995 | 97 | 363 | 81.3% | 4% |
