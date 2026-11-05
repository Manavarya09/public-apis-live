# Benchmark

_Measured 2026-11-05 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5095 | 3629 | 331 | 1135 | 71.2% | 6.5% |
| APIs.guru | 2069 | 1219 | 195 | 655 | 58.9% | 9.4% |
| n0shake/Public-APIs | 480 | 350 | 27 | 103 | 72.9% | 5.6% |
| public-api-lists/public-api-lists | 837 | 706 | 28 | 103 | 84.3% | 3.3% |
| public-apis/public-apis | 2338 | 1884 | 95 | 359 | 80.6% | 4.1% |
