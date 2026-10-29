# Benchmark

_Measured 2026-10-29 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4992 | 3499 | 330 | 1163 | 70.1% | 6.6% |
| APIs.guru | 2069 | 1182 | 197 | 690 | 57.1% | 9.5% |
| n0shake/Public-APIs | 480 | 354 | 27 | 99 | 73.8% | 5.6% |
| public-api-lists/public-api-lists | 837 | 706 | 24 | 107 | 84.3% | 2.9% |
| public-apis/public-apis | 2234 | 1783 | 94 | 357 | 79.8% | 4.2% |
