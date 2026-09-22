# Benchmark

_Measured 2026-09-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3184 | 363 | 1100 | 68.5% | 7.8% |
| APIs.guru | 2069 | 1223 | 194 | 652 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 354 | 30 | 96 | 73.8% | 6.3% |
| public-api-lists/public-api-lists | 837 | 708 | 24 | 105 | 84.6% | 2.9% |
| public-apis/public-apis | 1887 | 1414 | 137 | 336 | 74.9% | 7.3% |
