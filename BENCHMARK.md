# Benchmark

_Measured 2026-10-22 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3367 | 321 | 1254 | 68.1% | 6.5% |
| APIs.guru | 2069 | 1110 | 193 | 766 | 53.6% | 9.3% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 703 | 26 | 108 | 84% | 3.1% |
| public-apis/public-apis | 2184 | 1726 | 89 | 369 | 79% | 4.1% |
