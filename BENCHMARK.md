# Benchmark

_Measured 2026-06-24 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4287 | 2875 | 356 | 1056 | 67.1% | 8.3% |
| APIs.guru | 2069 | 1206 | 200 | 663 | 58.3% | 9.7% |
| n0shake/Public-APIs | 480 | 362 | 26 | 92 | 75.4% | 5.4% |
| public-api-lists/public-api-lists | 775 | 647 | 27 | 101 | 83.5% | 3.5% |
| public-apis/public-apis | 1568 | 1166 | 120 | 282 | 74.4% | 7.7% |
