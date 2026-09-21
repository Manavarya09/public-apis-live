# Benchmark

_Measured 2026-09-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3194 | 360 | 1093 | 68.7% | 7.7% |
| APIs.guru | 2069 | 1224 | 193 | 652 | 59.2% | 9.3% |
| n0shake/Public-APIs | 480 | 354 | 29 | 97 | 73.8% | 6% |
| public-api-lists/public-api-lists | 837 | 710 | 26 | 101 | 84.8% | 3.1% |
| public-apis/public-apis | 1887 | 1425 | 135 | 327 | 75.5% | 7.2% |
