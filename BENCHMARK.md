# Benchmark

_Measured 2026-11-01 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 5011 | 3557 | 330 | 1124 | 71% | 6.6% |
| APIs.guru | 2069 | 1214 | 196 | 659 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 28 | 97 | 74% | 5.8% |
| public-api-lists/public-api-lists | 837 | 709 | 24 | 104 | 84.7% | 2.9% |
| public-apis/public-apis | 2253 | 1811 | 95 | 347 | 80.4% | 4.2% |
