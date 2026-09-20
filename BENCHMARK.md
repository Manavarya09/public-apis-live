# Benchmark

_Measured 2026-09-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4609 | 3085 | 359 | 1165 | 66.9% | 7.8% |
| APIs.guru | 2069 | 1173 | 193 | 703 | 56.7% | 9.3% |
| n0shake/Public-APIs | 480 | 353 | 30 | 97 | 73.5% | 6.3% |
| public-api-lists/public-api-lists | 837 | 699 | 25 | 113 | 83.5% | 3% |
| public-apis/public-apis | 1846 | 1372 | 133 | 341 | 74.3% | 7.2% |
