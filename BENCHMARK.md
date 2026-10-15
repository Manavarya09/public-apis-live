# Benchmark

_Measured 2026-10-15 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4874 | 3376 | 329 | 1169 | 69.3% | 6.8% |
| APIs.guru | 2069 | 1177 | 197 | 695 | 56.9% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 24 | 103 | 84.8% | 2.9% |
| public-apis/public-apis | 2116 | 1665 | 94 | 357 | 78.7% | 4.4% |
