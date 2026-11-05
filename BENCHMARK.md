# Benchmark

_Measured 2026-11-05 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5062 | 3522 | 327 | 1213 | 69.6% | 6.5% |
| APIs.guru | 2069 | 1193 | 195 | 681 | 57.7% | 9.4% |
| n0shake/Public-APIs | 480 | 333 | 28 | 119 | 69.4% | 5.8% |
| public-api-lists/public-api-lists | 837 | 688 | 26 | 123 | 82.2% | 3.1% |
| public-apis/public-apis | 2304 | 1832 | 91 | 381 | 79.5% | 3.9% |
