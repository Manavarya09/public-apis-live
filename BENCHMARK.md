# Benchmark

_Measured 2026-11-19 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5240 | 3739 | 321 | 1180 | 71.4% | 6.1% |
| APIs.guru | 2069 | 1221 | 178 | 670 | 59% | 8.6% |
| n0shake/Public-APIs | 480 | 352 | 26 | 102 | 73.3% | 5.4% |
| public-api-lists/public-api-lists | 837 | 687 | 30 | 120 | 82.1% | 3.6% |
| public-apis/public-apis | 2483 | 1998 | 102 | 383 | 80.5% | 4.1% |
