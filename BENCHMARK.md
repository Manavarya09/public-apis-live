# Benchmark

_Measured 2026-10-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3496 | 335 | 1135 | 70.4% | 6.7% |
| APIs.guru | 2069 | 1218 | 197 | 654 | 58.9% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 701 | 29 | 107 | 83.8% | 3.5% |
| public-apis/public-apis | 2208 | 1747 | 97 | 364 | 79.1% | 4.4% |
