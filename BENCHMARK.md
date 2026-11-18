# Benchmark

_Measured 2026-11-18 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5212 | 3714 | 317 | 1181 | 71.3% | 6.1% |
| APIs.guru | 2069 | 1218 | 178 | 673 | 58.9% | 8.6% |
| n0shake/Public-APIs | 480 | 355 | 27 | 98 | 74% | 5.6% |
| public-api-lists/public-api-lists | 837 | 690 | 29 | 118 | 82.4% | 3.5% |
| public-apis/public-apis | 2455 | 1974 | 99 | 382 | 80.4% | 4% |
