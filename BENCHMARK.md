# Benchmark

_Measured 2026-09-26 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4673 | 3201 | 362 | 1110 | 68.5% | 7.7% |
| APIs.guru | 2069 | 1220 | 194 | 655 | 59% | 9.4% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 706 | 27 | 104 | 84.3% | 3.2% |
| public-apis/public-apis | 1913 | 1439 | 134 | 340 | 75.2% | 7% |
