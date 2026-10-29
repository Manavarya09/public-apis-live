# Benchmark

_Measured 2026-10-29 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3504 | 331 | 1131 | 70.6% | 6.7% |
| APIs.guru | 2069 | 1221 | 196 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 28 | 96 | 74.2% | 5.8% |
| public-api-lists/public-api-lists | 837 | 703 | 25 | 109 | 84% | 3% |
| public-apis/public-apis | 2208 | 1753 | 95 | 360 | 79.4% | 4.3% |
