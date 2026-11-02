# Benchmark

_Measured 2026-11-02 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3581 | 325 | 1125 | 71.2% | 6.5% |
| APIs.guru | 2069 | 1217 | 197 | 655 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 27 | 99 | 73.8% | 5.6% |
| public-api-lists/public-api-lists | 837 | 710 | 25 | 102 | 84.8% | 3% |
| public-apis/public-apis | 2273 | 1835 | 89 | 349 | 80.7% | 3.9% |
