# Benchmark

_Measured 2026-11-07 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5095 | 3626 | 325 | 1144 | 71.2% | 6.4% |
| APIs.guru | 2069 | 1216 | 195 | 658 | 58.8% | 9.4% |
| n0shake/Public-APIs | 480 | 355 | 26 | 99 | 74% | 5.4% |
| public-api-lists/public-api-lists | 837 | 697 | 25 | 115 | 83.3% | 3% |
| public-apis/public-apis | 2338 | 1887 | 91 | 360 | 80.7% | 3.9% |
