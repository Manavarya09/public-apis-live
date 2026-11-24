# Benchmark

_Measured 2026-11-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3802 | 327 | 1167 | 71.8% | 6.2% |
| APIs.guru | 2069 | 1236 | 178 | 655 | 59.7% | 8.6% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 689 | 29 | 119 | 82.3% | 3.5% |
| public-apis/public-apis | 2539 | 2047 | 109 | 383 | 80.6% | 4.3% |
