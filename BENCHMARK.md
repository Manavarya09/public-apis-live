# Benchmark

_Measured 2026-09-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3189 | 357 | 1101 | 68.6% | 7.7% |
| APIs.guru | 2069 | 1221 | 194 | 654 | 59% | 9.4% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 24 | 103 | 84.8% | 2.9% |
| public-apis/public-apis | 1887 | 1422 | 131 | 334 | 75.4% | 6.9% |
