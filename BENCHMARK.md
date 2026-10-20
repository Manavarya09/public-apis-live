# Benchmark

_Measured 2026-10-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4933 | 3475 | 324 | 1134 | 70.4% | 6.6% |
| APIs.guru | 2069 | 1209 | 197 | 663 | 58.4% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 25 | 102 | 84.8% | 3% |
| public-apis/public-apis | 2175 | 1733 | 88 | 354 | 79.7% | 4% |
