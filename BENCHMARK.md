# Benchmark

_Measured 2026-11-16 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3749 | 324 | 1139 | 71.9% | 6.2% |
| APIs.guru | 2069 | 1238 | 179 | 652 | 59.8% | 8.7% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 694 | 30 | 113 | 82.9% | 3.6% |
| public-apis/public-apis | 2455 | 1989 | 104 | 362 | 81% | 4.2% |
