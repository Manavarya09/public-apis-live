# Benchmark

_Measured 2026-11-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5240 | 3753 | 320 | 1167 | 71.6% | 6.1% |
| APIs.guru | 2069 | 1219 | 176 | 674 | 58.9% | 8.5% |
| n0shake/Public-APIs | 480 | 352 | 28 | 100 | 73.3% | 5.8% |
| public-api-lists/public-api-lists | 837 | 692 | 29 | 116 | 82.7% | 3.5% |
| public-apis/public-apis | 2483 | 2014 | 103 | 366 | 81.1% | 4.1% |
