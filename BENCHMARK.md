# Benchmark

_Measured 2026-11-25 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5296 | 3810 | 323 | 1163 | 71.9% | 6.1% |
| APIs.guru | 2069 | 1241 | 179 | 649 | 60% | 8.7% |
| n0shake/Public-APIs | 480 | 354 | 26 | 100 | 73.8% | 5.4% |
| public-api-lists/public-api-lists | 837 | 692 | 28 | 117 | 82.7% | 3.3% |
| public-apis/public-apis | 2539 | 2046 | 104 | 389 | 80.6% | 4.1% |
