# Benchmark

_Measured 2026-06-17 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2920 | 474 | 893 | 68.1% | 11.1% |
| APIs.guru | 2069 | 1107 | 310 | 652 | 53.5% | 15% |
| n0shake/Public-APIs | 480 | 393 | 30 | 57 | 81.9% | 6.3% |
| public-api-lists/public-api-lists | 775 | 699 | 30 | 46 | 90.2% | 3.9% |
| public-apis/public-apis | 1561 | 1257 | 122 | 182 | 80.5% | 7.8% |
