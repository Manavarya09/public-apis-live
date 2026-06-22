# Benchmark

_Measured 2026-06-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4285 | 2792 | 357 | 1136 | 65.2% | 8.3% |
| APIs.guru | 2069 | 1133 | 196 | 740 | 54.8% | 9.5% |
| n0shake/Public-APIs | 480 | 358 | 28 | 94 | 74.6% | 5.8% |
| public-api-lists/public-api-lists | 775 | 646 | 28 | 101 | 83.4% | 3.6% |
| public-apis/public-apis | 1565 | 1155 | 125 | 285 | 73.8% | 8% |
