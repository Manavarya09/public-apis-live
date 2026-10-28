# Benchmark

_Measured 2026-10-28 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3504 | 332 | 1130 | 70.6% | 6.7% |
| APIs.guru | 2069 | 1214 | 197 | 658 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 29 | 96 | 74% | 6% |
| public-api-lists/public-api-lists | 837 | 703 | 27 | 107 | 84% | 3.2% |
| public-apis/public-apis | 2208 | 1762 | 94 | 352 | 79.8% | 4.3% |
