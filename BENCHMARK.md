# Benchmark

_Measured 2026-10-20 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4933 | 3446 | 334 | 1153 | 69.9% | 6.8% |
| APIs.guru | 2069 | 1209 | 200 | 660 | 58.4% | 9.7% |
| n0shake/Public-APIs | 480 | 355 | 28 | 97 | 74% | 5.8% |
| public-api-lists/public-api-lists | 837 | 706 | 25 | 106 | 84.3% | 3% |
| public-apis/public-apis | 2175 | 1706 | 96 | 373 | 78.4% | 4.4% |
