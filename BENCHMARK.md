# Benchmark

_Measured 2026-10-13 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4853 | 3346 | 335 | 1172 | 68.9% | 6.9% |
| APIs.guru | 2069 | 1170 | 195 | 704 | 56.5% | 9.4% |
| n0shake/Public-APIs | 480 | 353 | 29 | 98 | 73.5% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 25 | 105 | 84.5% | 3% |
| public-apis/public-apis | 2095 | 1643 | 105 | 347 | 78.4% | 5% |
