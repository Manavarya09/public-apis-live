# Benchmark

_Measured 2026-06-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2869 | 353 | 1063 | 67% | 8.2% |
| APIs.guru | 2069 | 1211 | 199 | 659 | 58.5% | 9.6% |
| n0shake/Public-APIs | 480 | 358 | 26 | 96 | 74.6% | 5.4% |
| public-api-lists/public-api-lists | 775 | 642 | 28 | 105 | 82.8% | 3.6% |
| public-apis/public-apis | 1565 | 1157 | 117 | 291 | 73.9% | 7.5% |
