# Benchmark

_Measured 2026-10-30 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4992 | 3528 | 332 | 1132 | 70.7% | 6.7% |
| APIs.guru | 2069 | 1220 | 197 | 652 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 351 | 28 | 101 | 73.1% | 5.8% |
| public-api-lists/public-api-lists | 837 | 703 | 25 | 109 | 84% | 3% |
| public-apis/public-apis | 2234 | 1784 | 95 | 355 | 79.9% | 4.3% |
