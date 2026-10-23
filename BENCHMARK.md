# Benchmark

_Measured 2026-10-23 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4942 | 3473 | 335 | 1134 | 70.3% | 6.8% |
| APIs.guru | 2069 | 1220 | 197 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 353 | 30 | 97 | 73.5% | 6.3% |
| public-api-lists/public-api-lists | 837 | 700 | 27 | 110 | 83.6% | 3.2% |
| public-apis/public-apis | 2184 | 1728 | 97 | 359 | 79.1% | 4.4% |
