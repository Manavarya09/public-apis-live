# Benchmark

_Measured 2026-09-21 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4647 | 3174 | 364 | 1109 | 68.3% | 7.8% |
| APIs.guru | 2069 | 1214 | 194 | 661 | 58.7% | 9.4% |
| n0shake/Public-APIs | 480 | 352 | 29 | 99 | 73.3% | 6% |
| public-api-lists/public-api-lists | 837 | 709 | 27 | 101 | 84.7% | 3.2% |
| public-apis/public-apis | 1887 | 1417 | 137 | 333 | 75.1% | 7.3% |
