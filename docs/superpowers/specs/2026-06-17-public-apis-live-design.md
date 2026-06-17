# public-apis-live — Design Spec

**Date:** 2026-06-17
**Working name:** `public-apis-live` (repo + npm package; renameable, nothing depends on it)
**North star:** GitHub stars. Everything optimizes for a browsable, shareable, *living* repo.

## 1. The Hook

The famous `public-apis/public-apis` repo (~330k★) is a plain markdown list with a well-known
weakness: **dead links and stale data, no search, thin metadata.** Our differentiator:

> **The only public-API list where every entry is auto-checked for reachability and refreshed daily by CI.**

Three distribution surfaces, **one shared dataset**, all shipped in v1:

1. **GitHub repo** — auto-generated README + `apis.json` → earns the ⭐
2. **npm package** — `npm i public-apis-live` to query/filter APIs in code → reaches JS devs / vibecoders
3. **Claude plugin** — MCP server + skill so agents can ask "what API should I use for X?" → reaches the agent crowd

## 2. Honesty Guardrail (credibility = a feature)

We only verify **reachability** (no API keys, no functional tests). All user-facing wording says
**"reachable / responding"**, never "functionally tested". A "How verification works" section in the
README explains exactly what UP/DOWN/UNKNOWN mean. This honesty is itself a differentiator vs. lists
that imply more than they prove.

## 3. Architecture (TypeScript monorepo, pnpm workspaces)

```
public-apis-live/
├─ packages/
│  ├─ core/          # types, source adapters, normalize/dedupe/merge, reachability verifier,
│  │                 # README+badge emitter, AND the runtime query API. Published to npm.
│  ├─ mcp-server/    # MCP server exposing tools → imports core's query layer
│  └─ plugin/        # Claude plugin manifest wrapping mcp-server + a skill
├─ data/
│  └─ apis.json      # canonical generated dataset (committed; bundled into the npm package)
├─ README.md         # AUTO-GENERATED — never hand-edited
└─ .github/workflows/refresh.yml   # daily cron: run pipeline → commit data+README if changed
```

**Single language (TypeScript), single source of truth.** Write the data logic once in `core`;
consume it three ways. `core` exports both the build-time pipeline and the runtime query functions.
The npm package **is** `core` (ships with `apis.json` bundled → works offline, zero network at query
time). The MCP server depends on `core`. The plugin packages the MCP server + skill.

Rejected alternatives: Python pipeline + TS consumers (two languages, duplicated schema, no shared
logic); single all-in-one TS package (ships scraping deps to every `npm install`, tangles dev-time and
runtime code).

## 4. Data Pipeline (5 stages, all in `core`)

1. **Fetch** — pull raw lists from configured source repos (GitHub raw README/JSON).
2. **Parse** — one small adapter per source format (markdown-table parser, etc.) → raw entries.
   Adapters are isolated and independently testable (fixture in → canonical out).
3. **Normalize + merge + dedupe** — map to the canonical schema; dedupe by normalized name + host;
   keep **provenance** (`sourceRepos: [...]`) so we credit sources and can show "found in N lists".
4. **Verify reachability** — concurrency-limited HTTP check (HEAD, fallback GET) of each API's
   primary URL, with timeout + retry. Classification rules:
   - `up`   — got an HTTP response, **including** 401/403/429 (server alive; auth/rate-limited)
   - `down` — DNS failure / connection refused / 5xx / 404 on the only known URL
   - `unknown` — timeout / inconclusive
   Record `httpCode`, `responseMs`, `lastChecked`.
5. **Emit** — `data/apis.json`, generated `README.md`, and a shields.io endpoint badge
   ("✅ N reachable APIs").

The pipeline is deterministic given fixtures → highly testable.

## 5. Canonical Schema (one entry)

```jsonc
{
  "id": "catfacts",                          // stable slug
  "name": "Cat Facts",
  "description": "Daily cat facts",
  "category": "Animals",
  "url": "https://catfact.ninja",            // primary URL that gets checked
  "docsUrl": "https://catfact.ninja/",
  "auth": "none",                            // none | apiKey | OAuth | token | unknown
  "https": true,
  "cors": "unknown",                         // yes | no | unknown
  "sourceRepos": ["public-apis/public-apis"],// provenance
  "status": "up",                            // up | down | unknown
  "httpCode": 200,
  "responseMs": 142,
  "lastChecked": "2026-06-17T00:00:00Z"
}
```

## 6. The Three Surfaces

- **README (auto-generated):** totals + freshness badge at top; tables grouped by category with a
  status emoji per row; "How verification works" honesty section; source credits. Never hand-edited —
  regenerated every run. This is the artifact that gets starred.
- **npm package (`public-apis-live` = `core`):** runtime API —
  `findApis({ category, auth, status, search })`, `getApi(id)`, `listCategories()`, and a raw
  `apis` export. Dataset bundled → offline, zero network.
- **Claude plugin:** MCP tools `search_apis`, `get_api`, `list_categories` (thin wrappers over the
  npm query layer) + a skill: *"When choosing a public API for a task, query this first."*

## 7. CI — the "living repo" engine

GitHub Actions **daily cron**: run the pipeline; if `apis.json`/`README.md` changed, commit.
On PRs: run the pipeline in validate-only mode + tests. Daily commits + green checks + a moving
"reachable APIs" count signal active maintenance, which converts star-browsers.

## 8. Configuration

`packages/core/sources.config.ts` lists source repos (default set below) so adding a source is a
one-line change with a new adapter:
- `public-apis/public-apis`
- `public-api-lists/public-api-lists`
- `marcelscruz/dev-resources`
- `n0shake/Public-APIs`

## 9. Testing

- Per-adapter parser tests (fixture markdown → expected canonical entries).
- Dedupe/merge tests (overlapping entries from multiple sources → single merged entry with combined
  provenance).
- Verifier classifier tests (mocked HTTP responses → correct up/down/unknown).
- README emitter snapshot test (canonical fixture → expected markdown).

## 10. Out of Scope for v1

- Functional / authenticated API testing (keys, secrets).
- A hosted website / search UI (the README is the UI for v1).
- User submissions / PR-based contributions workflow (can come later).
- Historical uptime tracking / status graphs.

## Open Questions

- Final public name (using `public-apis-live` as the working name).
- npm scope: unscoped `public-apis-live` vs. scoped `@user/public-apis-live` (depends on name
  availability at publish time).
