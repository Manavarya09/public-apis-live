# Benchmark

_Measured 2026-06-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4281 | 2753 | 347 | 1181 | 64.3% | 8.1% |
| APIs.guru | 2069 | 1145 | 184 | 740 | 55.3% | 8.9% |
| n0shake/Public-APIs | 480 | 345 | 28 | 107 | 71.9% | 5.8% |
| public-api-lists/public-api-lists | 775 | 622 | 27 | 126 | 80.3% | 3.5% |
| public-apis/public-apis | 1561 | 1122 | 125 | 314 | 71.9% | 8% |
