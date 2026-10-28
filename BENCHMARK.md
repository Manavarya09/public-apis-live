# Benchmark

_Measured 2026-10-28 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4966 | 3464 | 334 | 1168 | 69.8% | 6.7% |
| APIs.guru | 2069 | 1182 | 197 | 690 | 57.1% | 9.5% |
| n0shake/Public-APIs | 480 | 355 | 28 | 97 | 74% | 5.8% |
| public-api-lists/public-api-lists | 837 | 704 | 24 | 109 | 84.1% | 2.9% |
| public-apis/public-apis | 2208 | 1752 | 98 | 358 | 79.3% | 4.4% |
