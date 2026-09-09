# Benchmark

_Measured 2026-09-09 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4494 | 3050 | 358 | 1086 | 67.9% | 8% |
| APIs.guru | 2069 | 1220 | 196 | 653 | 59% | 9.5% |
| n0shake/Public-APIs | 480 | 353 | 32 | 95 | 73.5% | 6.7% |
| public-api-lists/public-api-lists | 802 | 673 | 24 | 105 | 83.9% | 3% |
| public-apis/public-apis | 1755 | 1305 | 130 | 320 | 74.4% | 7.4% |
