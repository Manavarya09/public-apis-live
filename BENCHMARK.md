# Benchmark

_Measured 2026-09-11 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4508 | 3059 | 363 | 1086 | 67.9% | 8.1% |
| APIs.guru | 2069 | 1216 | 197 | 656 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 350 | 32 | 98 | 72.9% | 6.7% |
| public-api-lists/public-api-lists | 802 | 676 | 26 | 100 | 84.3% | 3.2% |
| public-apis/public-apis | 1769 | 1318 | 134 | 317 | 74.5% | 7.6% |
