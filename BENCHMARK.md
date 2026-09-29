# Benchmark

_Measured 2026-09-29 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4714 | 3224 | 356 | 1134 | 68.4% | 7.6% |
| APIs.guru | 2069 | 1203 | 193 | 673 | 58.1% | 9.3% |
| n0shake/Public-APIs | 480 | 353 | 29 | 98 | 73.5% | 6% |
| public-api-lists/public-api-lists | 837 | 707 | 26 | 104 | 84.5% | 3.1% |
| public-apis/public-apis | 1954 | 1479 | 128 | 347 | 75.7% | 6.6% |
