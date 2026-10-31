# Benchmark

_Measured 2026-10-31 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5011 | 3556 | 327 | 1128 | 71% | 6.5% |
| APIs.guru | 2069 | 1217 | 197 | 655 | 58.8% | 9.5% |
| n0shake/Public-APIs | 480 | 353 | 28 | 99 | 73.5% | 5.8% |
| public-api-lists/public-api-lists | 837 | 706 | 24 | 107 | 84.3% | 2.9% |
| public-apis/public-apis | 2253 | 1810 | 91 | 352 | 80.3% | 4% |
