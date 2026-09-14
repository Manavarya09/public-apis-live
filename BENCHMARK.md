# Benchmark

_Measured 2026-09-14 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4559 | 3109 | 363 | 1087 | 68.2% | 8% |
| APIs.guru | 2069 | 1209 | 199 | 661 | 58.4% | 9.6% |
| n0shake/Public-APIs | 480 | 355 | 31 | 94 | 74% | 6.5% |
| public-api-lists/public-api-lists | 837 | 711 | 26 | 100 | 84.9% | 3.1% |
| public-apis/public-apis | 1798 | 1352 | 130 | 316 | 75.2% | 7.2% |
