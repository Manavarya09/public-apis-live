# Benchmark

_Measured 2026-11-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3807 | 330 | 1159 | 71.9% | 6.2% |
| APIs.guru | 2069 | 1239 | 178 | 652 | 59.9% | 8.6% |
| n0shake/Public-APIs | 480 | 355 | 26 | 99 | 74% | 5.4% |
| public-api-lists/public-api-lists | 837 | 693 | 32 | 112 | 82.8% | 3.8% |
| public-apis/public-apis | 2539 | 2046 | 111 | 382 | 80.6% | 4.4% |
