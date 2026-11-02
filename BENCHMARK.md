# Benchmark

_Measured 2026-11-02 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5031 | 3584 | 328 | 1119 | 71.2% | 6.5% |
| APIs.guru | 2069 | 1217 | 198 | 654 | 58.8% | 9.6% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 707 | 25 | 105 | 84.5% | 3% |
| public-apis/public-apis | 2273 | 1837 | 91 | 345 | 80.8% | 4% |
