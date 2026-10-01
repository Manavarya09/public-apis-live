# Benchmark

_Measured 2026-10-01 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4714 | 3241 | 357 | 1116 | 68.8% | 7.6% |
| APIs.guru | 2069 | 1215 | 195 | 659 | 58.7% | 9.4% |
| n0shake/Public-APIs | 480 | 353 | 29 | 98 | 73.5% | 6% |
| public-api-lists/public-api-lists | 837 | 708 | 25 | 104 | 84.6% | 3% |
| public-apis/public-apis | 1954 | 1487 | 129 | 338 | 76.1% | 6.6% |
