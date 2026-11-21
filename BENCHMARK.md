# Benchmark

_Measured 2026-11-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5268 | 3794 | 323 | 1151 | 72% | 6.1% |
| APIs.guru | 2069 | 1231 | 179 | 659 | 59.5% | 8.7% |
| n0shake/Public-APIs | 480 | 358 | 26 | 96 | 74.6% | 5.4% |
| public-api-lists/public-api-lists | 837 | 693 | 32 | 112 | 82.8% | 3.8% |
| public-apis/public-apis | 2511 | 2038 | 101 | 372 | 81.2% | 4% |
