# Benchmark

_Measured 2026-09-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4609 | 3163 | 361 | 1085 | 68.6% | 7.8% |
| APIs.guru | 2069 | 1222 | 194 | 653 | 59.1% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 30 | 95 | 74% | 6.3% |
| public-api-lists/public-api-lists | 837 | 711 | 28 | 98 | 84.9% | 3.3% |
| public-apis/public-apis | 1846 | 1391 | 133 | 322 | 75.4% | 7.2% |
