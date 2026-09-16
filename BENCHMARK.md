# Benchmark

_Measured 2026-09-16 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4575 | 3128 | 364 | 1083 | 68.4% | 8% |
| APIs.guru | 2069 | 1215 | 200 | 654 | 58.7% | 9.7% |
| n0shake/Public-APIs | 480 | 355 | 28 | 97 | 74% | 5.8% |
| public-api-lists/public-api-lists | 837 | 711 | 25 | 101 | 84.9% | 3% |
| public-apis/public-apis | 1812 | 1364 | 131 | 317 | 75.3% | 7.2% |
