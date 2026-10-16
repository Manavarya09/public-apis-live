# Benchmark

_Measured 2026-10-16 from the live, reachability-verified dataset. Regenerated daily._

How the major public-API lists actually hold up once **every link is checked**.
Working = the server responded; dead = DNS/connection failure, 5xx, or 404; unknown = timeout.
Per-source rows count an entry under every list it appears in, so they overlap; the merged row is
deduped. This table is produced by the same verification that builds the directory — reproducible,
not hand-curated.

| Source | APIs | ✅ working | ❌ dead | ❔ unknown | working rate | dead rate |
|---|---|---|---|---|---|---|
| public-apis-live (merged, deduped) | 4902 | 3432 | 329 | 1141 | 70% | 6.7% |
| APIs.guru | 2069 | 1215 | 197 | 657 | 58.7% | 9.5% |
| n0shake/Public-APIs | 480 | 356 | 29 | 95 | 74.2% | 6% |
| public-api-lists/public-api-lists | 837 | 708 | 24 | 105 | 84.6% | 2.9% |
| public-apis/public-apis | 2144 | 1680 | 92 | 372 | 78.4% | 4.3% |
