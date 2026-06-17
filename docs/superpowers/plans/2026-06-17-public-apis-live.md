# public-apis-live Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a TypeScript monorepo that aggregates public-API lists from top GitHub repos, dedupes + enriches them, auto-verifies reachability, and ships the dataset as an auto-generated README, an npm package, and a Claude plugin (MCP server + skill) — refreshed daily by CI.

**Architecture:** Single `core` package owns the whole pipeline (fetch → parse → normalize/dedupe → verify → emit) AND the runtime query API. The npm package *is* `core` (with `apis.json` bundled). The MCP server imports `core`'s query layer. The Claude plugin wraps the MCP server + a skill. GitHub Actions runs the pipeline on a daily cron and commits changed data/README.

**Tech Stack:** TypeScript, pnpm workspaces, tsx (run TS directly), vitest (tests), undici/fetch (HTTP), p-limit (concurrency), @modelcontextprotocol/sdk (MCP), GitHub Actions.

---

## File Structure

```
public-apis-live/
├─ package.json                      # workspace root, scripts
├─ pnpm-workspace.yaml
├─ tsconfig.base.json
├─ vitest.config.ts
├─ packages/
│  ├─ core/
│  │  ├─ package.json                # name: public-apis-live (the npm package)
│  │  ├─ tsconfig.json
│  │  ├─ sources.config.ts           # list of source repos
│  │  ├─ src/
│  │  │  ├─ types.ts                 # ApiEntry, Status, Auth, RawEntry
│  │  │  ├─ fetch.ts                 # fetchSource(url)
│  │  │  ├─ adapters/
│  │  │  │  ├─ index.ts              # adapter registry
│  │  │  │  └─ markdownTable.ts      # parseMarkdownTable(md, repo)
│  │  │  ├─ normalize.ts             # mergeAndDedupe(rawEntries[])
│  │  │  ├─ verify.ts                # verifyReachability(entries)
│  │  │  ├─ emit/
│  │  │  │  ├─ readme.ts             # renderReadme(entries, stats)
│  │  │  │  └─ badge.ts              # renderBadge(stats)
│  │  │  ├─ query.ts                 # findApis/getApi/listCategories (runtime)
│  │  │  ├─ pipeline.ts              # runPipeline() orchestrator
│  │  │  └─ index.ts                 # public npm exports (query + bundled data)
│  │  └─ test/                       # vitest specs + fixtures
│  ├─ mcp-server/
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ src/index.ts                # MCP server: search_apis/get_api/list_categories
│  └─ plugin/
│     ├─ .claude-plugin/plugin.json  # Claude plugin manifest
│     └─ skills/choosing-an-api/SKILL.md
├─ data/apis.json                    # generated, committed
├─ README.md                         # generated, committed
├─ scripts/refresh.ts                # entry: runPipeline + write files
└─ .github/workflows/refresh.yml     # daily cron
```

---

## Task 1: Monorepo scaffold

**Files:**
- Create: `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, `vitest.config.ts`
- Create: `packages/core/package.json`, `packages/core/tsconfig.json`

- [ ] **Step 1: Root `package.json`**

```json
{
  "name": "public-apis-live-monorepo",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "vitest run",
    "refresh": "tsx scripts/refresh.ts",
    "build": "pnpm -r build"
  },
  "devDependencies": {
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
```

- [ ] **Step 2: `pnpm-workspace.yaml`**

```yaml
packages:
  - "packages/*"
```

- [ ] **Step 3: `tsconfig.base.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "declaration": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

- [ ] **Step 4: `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
export default defineConfig({ test: { include: ["packages/**/test/**/*.test.ts"] } });
```

- [ ] **Step 5: `packages/core/package.json`** (this is the published npm package)

```json
{
  "name": "public-apis-live",
  "version": "0.1.0",
  "description": "Aggregated, deduped, auto-reachability-checked list of public APIs. Refreshed daily.",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist", "apis.json"],
  "keywords": ["public-apis", "api", "directory", "free-apis", "live"],
  "license": "MIT",
  "scripts": { "build": "tsc -p tsconfig.json" },
  "dependencies": { "p-limit": "^6.1.0" }
}
```

- [ ] **Step 6: `packages/core/tsconfig.json`**

```json
{ "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "dist", "rootDir": "src" }, "include": ["src"] }
```

- [ ] **Step 7: Install + commit**

```bash
pnpm install
git add -A && git commit -m "chore: scaffold pnpm monorepo with core package"
```

---

## Task 2: Core types

**Files:** Create `packages/core/src/types.ts`; Test `packages/core/test/types.test.ts`

- [ ] **Step 1: Write the types**

```ts
export type Status = "up" | "down" | "unknown";
export type Auth = "none" | "apiKey" | "OAuth" | "token" | "unknown";

export interface RawEntry {
  name: string;
  description: string;
  category: string;
  url: string;
  auth?: Auth;
  https?: boolean;
  cors?: "yes" | "no" | "unknown";
  sourceRepo: string;
}

export interface ApiEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  docsUrl?: string;
  auth: Auth;
  https: boolean;
  cors: "yes" | "no" | "unknown";
  sourceRepos: string[];
  status: Status;
  httpCode?: number;
  responseMs?: number;
  lastChecked?: string;
}
```

- [ ] **Step 2: Trivial type test (compile guard)**

```ts
import { describe, it, expect } from "vitest";
import type { ApiEntry } from "../src/types.js";
describe("types", () => {
  it("constructs an ApiEntry", () => {
    const e: ApiEntry = { id: "x", name: "X", description: "d", category: "c",
      url: "https://x.com", auth: "none", https: true, cors: "unknown",
      sourceRepos: ["a/b"], status: "unknown" };
    expect(e.id).toBe("x");
  });
});
```

- [ ] **Step 3: Run + commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): add canonical ApiEntry types"
```

---

## Task 3: Markdown-table adapter

The `public-apis` README uses tables: `| API | Description | Auth | HTTPS | CORS |` under `### Category` headings, where API is `[Name](url)`.

**Files:** Create `packages/core/src/adapters/markdownTable.ts`, `packages/core/src/adapters/index.ts`; Test `packages/core/test/markdownTable.test.ts` + fixture `packages/core/test/fixtures/sample.md`

- [ ] **Step 1: Fixture `sample.md`**

```markdown
### Animals

| API | Description | Auth | HTTPS | CORS |
|---|---|---|---|---|
| [Cat Facts](https://catfact.ninja) | Daily cat facts | No | Yes | No |
| [Dogs](https://dog.ceo/dog-api) | Dog images | `apiKey` | Yes | Yes |

### Books

| API | Description | Auth | HTTPS | CORS |
|---|---|---|---|---|
| [Open Library](https://openlibrary.org/developers/api) | Books data | No | Yes | Unknown |
```

- [ ] **Step 2: Failing test**

```ts
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { parseMarkdownTable } from "../src/adapters/markdownTable.js";

const md = readFileSync(new URL("./fixtures/sample.md", import.meta.url), "utf8");

describe("parseMarkdownTable", () => {
  const rows = parseMarkdownTable(md, "public-apis/public-apis");
  it("parses all rows across categories", () => expect(rows).toHaveLength(3));
  it("extracts name + url from the markdown link", () => {
    const cat = rows.find(r => r.name === "Cat Facts")!;
    expect(cat.url).toBe("https://catfact.ninja");
    expect(cat.category).toBe("Animals");
    expect(cat.auth).toBe("none");
    expect(cat.https).toBe(true);
    expect(cat.sourceRepo).toBe("public-apis/public-apis");
  });
  it("maps apiKey auth and books category", () => {
    expect(rows.find(r => r.name === "Dogs")!.auth).toBe("apiKey");
    expect(rows.find(r => r.name === "Open Library")!.category).toBe("Books");
  });
});
```

- [ ] **Step 3: Run → FAIL** (`parseMarkdownTable is not a function`). Run: `pnpm test markdownTable`

- [ ] **Step 4: Implement `markdownTable.ts`**

```ts
import type { Auth, RawEntry } from "../types.js";

function normAuth(raw: string): Auth {
  const s = raw.replace(/`/g, "").trim().toLowerCase();
  if (s === "" || s === "no" || s === "none") return "none";
  if (s === "apikey") return "apiKey";
  if (s === "oauth") return "OAuth";
  if (s === "token") return "token";
  return "unknown";
}
const yes = (s: string) => s.replace(/`/g, "").trim().toLowerCase() === "yes";

export function parseMarkdownTable(md: string, sourceRepo: string): RawEntry[] {
  const out: RawEntry[] = [];
  let category = "Uncategorized";
  for (const line of md.split("\n")) {
    const h = line.match(/^#{2,4}\s+(.+?)\s*$/);
    if (h) { category = h[1].trim(); continue; }
    if (!line.trim().startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map(c => c.trim());
    if (cells.length < 2) continue;
    const link = cells[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!link) continue; // skips header + separator rows
    out.push({
      name: link[1].trim(),
      url: link[2].trim(),
      description: cells[1] ?? "",
      category,
      auth: cells[2] !== undefined ? normAuth(cells[2]) : "unknown",
      https: cells[3] !== undefined ? yes(cells[3]) : false,
      cors: cells[4] !== undefined && yes(cells[4]) ? "yes" : "unknown",
      sourceRepo,
    });
  }
  return out;
}
```

- [ ] **Step 5: Adapter registry `adapters/index.ts`**

```ts
import { parseMarkdownTable } from "./markdownTable.js";
import type { RawEntry } from "../types.js";
export type Adapter = (content: string, repo: string) => RawEntry[];
export const adapters: Record<string, Adapter> = { markdownTable: parseMarkdownTable };
```

- [ ] **Step 6: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): markdown-table source adapter"
```

---

## Task 4: Normalize, merge & dedupe

**Files:** Create `packages/core/src/normalize.ts`; Test `packages/core/test/normalize.test.ts`

- [ ] **Step 1: Failing test**

```ts
import { describe, it, expect } from "vitest";
import { mergeAndDedupe, slugify } from "../src/normalize.js";
import type { RawEntry } from "../src/types.js";

const raw: RawEntry[] = [
  { name: "Cat Facts", url: "https://catfact.ninja/", description: "Cats", category: "Animals", auth: "none", https: true, cors: "unknown", sourceRepo: "a/one" },
  { name: "Cat Facts", url: "http://catfact.ninja", description: "Cat facts longer desc", category: "Animals", auth: "none", https: false, cors: "unknown", sourceRepo: "b/two" },
  { name: "Dogs", url: "https://dog.ceo", description: "Dogs", category: "Animals", auth: "apiKey", https: true, cors: "yes", sourceRepo: "a/one" },
];

describe("mergeAndDedupe", () => {
  const merged = mergeAndDedupe(raw);
  it("dedupes by normalized host+name", () => expect(merged).toHaveLength(2));
  it("combines provenance from both sources", () => {
    const cat = merged.find(m => m.name === "Cat Facts")!;
    expect(cat.sourceRepos.sort()).toEqual(["a/one", "b/two"]);
  });
  it("prefers https and the longer description", () => {
    const cat = merged.find(m => m.name === "Cat Facts")!;
    expect(cat.https).toBe(true);
    expect(cat.description).toBe("Cat facts longer desc");
  });
  it("slugifies ids", () => expect(slugify("Cat Facts!")).toBe("cat-facts"));
});
```

- [ ] **Step 2: Run → FAIL.** Run: `pnpm test normalize`

- [ ] **Step 3: Implement `normalize.ts`**

```ts
import type { ApiEntry, RawEntry } from "./types.js";

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function host(url: string): string {
  try { return new URL(url).host.replace(/^www\./, "").toLowerCase(); }
  catch { return url.toLowerCase(); }
}
function dedupeKey(e: RawEntry): string {
  return `${host(e.url)}|${slugify(e.name)}`;
}

export function mergeAndDedupe(raws: RawEntry[]): ApiEntry[] {
  const byKey = new Map<string, ApiEntry>();
  for (const r of raws) {
    const key = dedupeKey(r);
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, {
        id: slugify(r.name),
        name: r.name,
        description: r.description,
        category: r.category,
        url: r.url,
        auth: r.auth ?? "unknown",
        https: r.https ?? false,
        cors: r.cors ?? "unknown",
        sourceRepos: [r.sourceRepo],
        status: "unknown",
      });
    } else {
      if (!existing.sourceRepos.includes(r.sourceRepo)) existing.sourceRepos.push(r.sourceRepo);
      if (r.https) existing.https = true;
      if ((r.description?.length ?? 0) > existing.description.length) existing.description = r.description;
      if (existing.auth === "unknown" && r.auth) existing.auth = r.auth;
      if (existing.cors === "unknown" && r.cors && r.cors !== "unknown") existing.cors = r.cors;
    }
  }
  // de-collide duplicate ids by appending host
  const seen = new Set<string>();
  for (const e of byKey.values()) {
    if (seen.has(e.id)) e.id = `${e.id}-${host(e.url).split(".")[0]}`;
    seen.add(e.id);
  }
  return [...byKey.values()];
}
```

- [ ] **Step 4: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): merge + dedupe with provenance"
```

---

## Task 5: Reachability verifier

**Files:** Create `packages/core/src/verify.ts`; Test `packages/core/test/verify.test.ts`

- [ ] **Step 1: Failing test (classifier is pure + unit-testable)**

```ts
import { describe, it, expect } from "vitest";
import { classify } from "../src/verify.js";

describe("classify", () => {
  it("2xx/3xx → up", () => { expect(classify(200).status).toBe("up"); expect(classify(301).status).toBe("up"); });
  it("401/403/429 → up (server alive)", () => { expect(classify(401).status).toBe("up"); expect(classify(429).status).toBe("up"); });
  it("404/5xx → down", () => { expect(classify(404).status).toBe("down"); expect(classify(503).status).toBe("down"); });
  it("network error (null) → unknown", () => expect(classify(null).status).toBe("unknown"));
});
```

- [ ] **Step 2: Run → FAIL.** Run: `pnpm test verify`

- [ ] **Step 3: Implement `verify.ts`**

```ts
import pLimit from "p-limit";
import type { ApiEntry, Status } from "./types.js";

export function classify(code: number | null): { status: Status; httpCode?: number } {
  if (code === null) return { status: "unknown" };
  if (code === 401 || code === 403 || code === 429) return { status: "up", httpCode: code };
  if (code >= 200 && code < 400) return { status: "up", httpCode: code };
  return { status: "down", httpCode: code };
}

async function probe(url: string, timeoutMs = 8000): Promise<number | null> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: ac.signal });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: ac.signal });
    }
    return res.status;
  } catch { return null; } finally { clearTimeout(t); }
}

export async function verifyReachability(
  entries: ApiEntry[], concurrency = 20,
  fetchFn: (url: string) => Promise<number | null> = probe,
): Promise<ApiEntry[]> {
  const limit = pLimit(concurrency);
  const stamp = new Date().toISOString();
  await Promise.all(entries.map(e => limit(async () => {
    const start = Date.now();
    const code = await fetchFn(e.url);
    const { status, httpCode } = classify(code);
    e.status = status; e.httpCode = httpCode;
    e.responseMs = Date.now() - start; e.lastChecked = stamp;
  })));
  return entries;
}
```

> Note: `Date.now()`/`new Date()` are fine in the real package (they are only forbidden inside Workflow scripts). The verify integration is covered by the classifier unit test + an injected `fetchFn` in tests to avoid real network.

- [ ] **Step 4: Add injected-fetch test**

```ts
import { verifyReachability } from "../src/verify.js";
import type { ApiEntry } from "../src/types.js";
it("verifies entries with injected fetch", async () => {
  const e: ApiEntry = { id:"x", name:"X", description:"", category:"c", url:"https://x.com",
    auth:"none", https:true, cors:"unknown", sourceRepos:["a/b"], status:"unknown" };
  await verifyReachability([e], 5, async () => 200);
  expect(e.status).toBe("up"); expect(e.httpCode).toBe(200);
});
```

- [ ] **Step 5: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): reachability verifier + classifier"
```

---

## Task 6: Query layer

**Files:** Create `packages/core/src/query.ts`; Test `packages/core/test/query.test.ts`

- [ ] **Step 1: Failing test**

```ts
import { describe, it, expect } from "vitest";
import { makeQuery } from "../src/query.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id:"cat", name:"Cat Facts", description:"cats", category:"Animals", url:"https://catfact.ninja", auth:"none", https:true, cors:"unknown", sourceRepos:["a/b"], status:"up" },
  { id:"dog", name:"Dogs", description:"dog images", category:"Animals", url:"https://dog.ceo", auth:"apiKey", https:true, cors:"yes", sourceRepos:["a/b"], status:"down" },
  { id:"books", name:"Open Library", description:"books", category:"Books", url:"https://openlibrary.org", auth:"none", https:true, cors:"unknown", sourceRepos:["a/b"], status:"up" },
];
const q = makeQuery(data);

describe("query", () => {
  it("getApi by id", () => expect(q.getApi("dog")!.name).toBe("Dogs"));
  it("listCategories sorted unique", () => expect(q.listCategories()).toEqual(["Animals", "Books"]));
  it("filters by category + auth + status", () => {
    expect(q.findApis({ category: "Animals" })).toHaveLength(2);
    expect(q.findApis({ auth: "none" })).toHaveLength(2);
    expect(q.findApis({ status: "up" })).toHaveLength(2);
  });
  it("free-text search over name + description", () => {
    expect(q.findApis({ search: "dog" }).map(a => a.id)).toEqual(["dog"]);
  });
});
```

- [ ] **Step 2: Run → FAIL.** Run: `pnpm test query`

- [ ] **Step 3: Implement `query.ts`**

```ts
import type { ApiEntry, Auth, Status } from "./types.js";

export interface Filter { category?: string; auth?: Auth; status?: Status; search?: string; }

export function makeQuery(data: ApiEntry[]) {
  return {
    getApi: (id: string) => data.find(a => a.id === id) ?? null,
    listCategories: () => [...new Set(data.map(a => a.category))].sort(),
    findApis: (f: Filter = {}): ApiEntry[] => data.filter(a => {
      if (f.category && a.category !== f.category) return false;
      if (f.auth && a.auth !== f.auth) return false;
      if (f.status && a.status !== f.status) return false;
      if (f.search) {
        const q = f.search.toLowerCase();
        if (!(`${a.name} ${a.description}`.toLowerCase().includes(q))) return false;
      }
      return true;
    }),
  };
}
```

- [ ] **Step 4: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): runtime query layer"
```

---

## Task 7: README + badge emitters

**Files:** Create `packages/core/src/emit/readme.ts`, `packages/core/src/emit/badge.ts`; Test `packages/core/test/readme.test.ts`

- [ ] **Step 1: Failing test**

```ts
import { describe, it, expect } from "vitest";
import { renderReadme } from "../src/emit/readme.js";
import { renderBadge } from "../src/emit/badge.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id:"cat", name:"Cat Facts", description:"cats", category:"Animals", url:"https://catfact.ninja", auth:"none", https:true, cors:"unknown", sourceRepos:["a/b"], status:"up", httpCode:200 },
  { id:"dog", name:"Dogs", description:"dogs", category:"Animals", url:"https://dog.ceo", auth:"apiKey", https:true, cors:"yes", sourceRepos:["a/b"], status:"down", httpCode:503 },
];

describe("emit", () => {
  const md = renderReadme(data, "2026-06-17");
  it("has a category heading and rows", () => {
    expect(md).toContain("### Animals");
    expect(md).toContain("[Cat Facts](https://catfact.ninja)");
  });
  it("shows status emoji", () => { expect(md).toContain("✅"); expect(md).toContain("❌"); });
  it("badge json reports reachable count", () => {
    const badge = JSON.parse(renderBadge(data));
    expect(badge.message).toBe("1 reachable");
  });
});
```

- [ ] **Step 2: Run → FAIL.** Run: `pnpm test readme`

- [ ] **Step 3: Implement `emit/badge.ts`**

```ts
import type { ApiEntry } from "../types.js";
export function renderBadge(data: ApiEntry[]): string {
  const up = data.filter(a => a.status === "up").length;
  return JSON.stringify({ schemaVersion: 1, label: "public APIs", message: `${up} reachable`, color: "brightgreen" });
}
```

- [ ] **Step 4: Implement `emit/readme.ts`**

```ts
import type { ApiEntry, Status } from "../types.js";
const emoji: Record<Status, string> = { up: "✅", down: "❌", unknown: "❔" };

export function renderReadme(data: ApiEntry[], date: string): string {
  const up = data.filter(a => a.status === "up").length;
  const cats = [...new Set(data.map(a => a.category))].sort();
  const head = [
    "# public-apis-live",
    "",
    `**${data.length} public APIs · ${up} reachable · verified ${date}**`,
    "",
    "The only public-API list where every entry is auto-checked for reachability and refreshed daily.",
    "",
    "> **How verification works:** we only check *reachability* (no API keys). ✅ = the server",
    "> responded (incl. auth/rate-limit codes), ❌ = DNS/connection failure, 5xx, or 404, ❔ = timeout.",
    "> We do **not** functionally test endpoints.",
    "",
  ];
  const body: string[] = [];
  for (const cat of cats) {
    body.push(`### ${cat}`, "", "| API | Description | Auth | HTTPS | Status |", "|---|---|---|---|---|");
    for (const a of data.filter(d => d.category === cat)) {
      body.push(`| [${a.name}](${a.url}) | ${a.description} | ${a.auth} | ${a.https ? "Yes" : "No"} | ${emoji[a.status]} |`);
    }
    body.push("");
  }
  return [...head, ...body].join("\n");
}
```

- [ ] **Step 5: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): README + badge emitters"
```

---

## Task 8: Sources config, fetch & pipeline orchestrator

**Files:** Create `packages/core/sources.config.ts`, `packages/core/src/fetch.ts`, `packages/core/src/pipeline.ts`; Test `packages/core/test/pipeline.test.ts`

- [ ] **Step 1: `sources.config.ts`**

```ts
export interface Source { repo: string; rawUrl: string; adapter: "markdownTable"; }
export const sources: Source[] = [
  { repo: "public-apis/public-apis", rawUrl: "https://raw.githubusercontent.com/public-apis/public-apis/master/README.md", adapter: "markdownTable" },
  { repo: "public-api-lists/public-api-lists", rawUrl: "https://raw.githubusercontent.com/public-api-lists/public-api-lists/master/README.md", adapter: "markdownTable" },
  { repo: "marcelscruz/dev-resources", rawUrl: "https://raw.githubusercontent.com/marcelscruz/dev-resources/main/README.md", adapter: "markdownTable" },
  { repo: "n0shake/Public-APIs", rawUrl: "https://raw.githubusercontent.com/n0shake/Public-APIs/master/README.md", adapter: "markdownTable" },
];
```

- [ ] **Step 2: `fetch.ts`**

```ts
export async function fetchSource(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
  return res.text();
}
```

- [ ] **Step 3: Failing test for pipeline (fully injected — no network)**

```ts
import { describe, it, expect } from "vitest";
import { runPipeline } from "../src/pipeline.js";

describe("runPipeline", () => {
  it("fetches, parses, dedupes, verifies via injected deps", async () => {
    const md = "### Animals\n\n| API | Description | Auth | HTTPS | CORS |\n|---|---|---|---|---|\n| [Cat Facts](https://catfact.ninja) | Cats | No | Yes | No |\n";
    const result = await runPipeline({
      sources: [{ repo: "a/b", rawUrl: "x", adapter: "markdownTable" }],
      fetchFn: async () => md,
      probeFn: async () => 200,
    });
    expect(result.entries).toHaveLength(1);
    expect(result.entries[0].status).toBe("up");
    expect(result.entries[0].sourceRepos).toEqual(["a/b"]);
  });
});
```

- [ ] **Step 4: Run → FAIL.** Run: `pnpm test pipeline`

- [ ] **Step 5: Implement `pipeline.ts`**

```ts
import { adapters } from "./adapters/index.js";
import { mergeAndDedupe } from "./normalize.js";
import { verifyReachability } from "./verify.js";
import type { ApiEntry, RawEntry } from "./types.js";
import { sources as defaultSources, type Source } from "../sources.config.js";

export interface PipelineOpts {
  sources?: Source[];
  fetchFn?: (url: string) => Promise<string>;
  probeFn?: (url: string) => Promise<number | null>;
}

export async function runPipeline(opts: PipelineOpts = {}): Promise<{ entries: ApiEntry[] }> {
  const srcs = opts.sources ?? defaultSources;
  const fetchFn = opts.fetchFn ?? (await import("./fetch.js")).fetchSource;
  const raws: RawEntry[] = [];
  for (const s of srcs) {
    try {
      const content = await fetchFn(s.rawUrl);
      raws.push(...adapters[s.adapter](content, s.repo));
    } catch (err) { console.error(`source ${s.repo} failed:`, (err as Error).message); }
  }
  const entries = mergeAndDedupe(raws);
  await verifyReachability(entries, 20, opts.probeFn);
  return { entries };
}
```

- [ ] **Step 6: Run → PASS, commit**

```bash
pnpm test && git add -A && git commit -m "feat(core): sources config, fetch, pipeline orchestrator"
```

---

## Task 9: Package entry (npm exports + bundled data)

**Files:** Create `packages/core/src/index.ts`, `packages/core/apis.json` (placeholder `[]`); Test `packages/core/test/index.test.ts`

- [ ] **Step 1: Seed `packages/core/apis.json`** with `[]`

- [ ] **Step 2: Failing test**

```ts
import { describe, it, expect } from "vitest";
import * as pkg from "../src/index.js";
describe("package exports", () => {
  it("exposes query fns + pipeline", () => {
    expect(typeof pkg.findApis).toBe("function");
    expect(typeof pkg.getApi).toBe("function");
    expect(typeof pkg.listCategories).toBe("function");
    expect(typeof pkg.runPipeline).toBe("function");
    expect(Array.isArray(pkg.apis)).toBe(true);
  });
});
```

- [ ] **Step 3: Implement `index.ts`**

```ts
import { makeQuery } from "./query.js";
import data from "../apis.json" with { type: "json" };
import type { ApiEntry } from "./types.js";

export const apis = data as ApiEntry[];
const q = makeQuery(apis);
export const findApis = q.findApis;
export const getApi = q.getApi;
export const listCategories = q.listCategories;

export * from "./types.js";
export { runPipeline } from "./pipeline.js";
export { makeQuery } from "./query.js";
```

- [ ] **Step 4: Run + build + commit**

```bash
pnpm test && pnpm --filter public-apis-live build && git add -A && git commit -m "feat(core): npm package entry with bundled dataset"
```

---

## Task 10: Refresh script (writes data + README)

**Files:** Create `scripts/refresh.ts`; add `tsx` already in root deps.

- [ ] **Step 1: Implement `scripts/refresh.ts`**

```ts
import { writeFileSync } from "node:fs";
import { runPipeline } from "../packages/core/src/pipeline.js";
import { renderReadme } from "../packages/core/src/emit/readme.js";
import { renderBadge } from "../packages/core/src/emit/badge.js";

const { entries } = await runPipeline();
entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
const date = new Date().toISOString().slice(0, 10);

writeFileSync("data/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("packages/core/apis.json", JSON.stringify(entries, null, 2));
writeFileSync("README.md", renderReadme(entries, date));
writeFileSync("data/badge.json", renderBadge(entries));
console.log(`Wrote ${entries.length} APIs (verified ${date}).`);
```

- [ ] **Step 2: Run it for real (network)** Run: `mkdir -p data && pnpm refresh`
  Expected: prints "Wrote N APIs", populates `data/apis.json`, `README.md`, `data/badge.json`.

- [ ] **Step 3: Commit the first real dataset**

```bash
git add -A && git commit -m "feat: first live dataset + generated README"
```

---

## Task 11: MCP server

**Files:** Create `packages/mcp-server/package.json`, `tsconfig.json`, `src/index.ts`

- [ ] **Step 1: `packages/mcp-server/package.json`**

```json
{
  "name": "public-apis-live-mcp",
  "version": "0.1.0",
  "type": "module",
  "bin": { "public-apis-live-mcp": "./dist/index.js" },
  "scripts": { "build": "tsc -p tsconfig.json" },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0",
    "public-apis-live": "workspace:*"
  }
}
```

- [ ] **Step 2: `packages/mcp-server/tsconfig.json`**

```json
{ "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "dist", "rootDir": "src" }, "include": ["src"] }
```

- [ ] **Step 3: Implement `src/index.ts`** (stdio server, 3 tools)

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { findApis, getApi, listCategories } from "public-apis-live";

const server = new McpServer({ name: "public-apis-live", version: "0.1.0" });

server.tool("search_apis",
  "Find public APIs by category, auth type, reachability status, or free-text. Use when choosing an API for a task.",
  { category: z.string().optional(), auth: z.enum(["none","apiKey","OAuth","token","unknown"]).optional(),
    status: z.enum(["up","down","unknown"]).optional(), search: z.string().optional() },
  async (args) => ({ content: [{ type: "text", text: JSON.stringify(findApis(args), null, 2) }] }));

server.tool("get_api", "Get one API by its id.",
  { id: z.string() },
  async ({ id }) => ({ content: [{ type: "text", text: JSON.stringify(getApi(id), null, 2) }] }));

server.tool("list_categories", "List all API categories.", {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(listCategories(), null, 2) }] }));

await server.connect(new StdioServerTransport());
```

- [ ] **Step 4: Install deps, build, smoke test, commit**

```bash
pnpm install && pnpm --filter public-apis-live-mcp build
# smoke: server should start and wait on stdio (Ctrl-C to exit)
node packages/mcp-server/dist/index.js &  sleep 1 && kill %1
git add -A && git commit -m "feat(mcp): MCP server with search/get/list tools"
```

---

## Task 12: Claude plugin (manifest + skill)

**Files:** Create `packages/plugin/.claude-plugin/plugin.json`, `packages/plugin/skills/choosing-an-api/SKILL.md`

- [ ] **Step 1: `plugin.json`**

```json
{
  "name": "public-apis-live",
  "version": "0.1.0",
  "description": "Discover working public APIs for any task. Auto-verified, refreshed daily.",
  "mcpServers": {
    "public-apis-live": { "command": "node", "args": ["${CLAUDE_PLUGIN_ROOT}/../mcp-server/dist/index.js"] }
  }
}
```

- [ ] **Step 2: `skills/choosing-an-api/SKILL.md`**

```markdown
---
name: choosing-an-api
description: Use when the user or agent needs to pick a public API for a task (weather, images, finance, etc.). Queries public-apis-live for reachable, deduped options.
---

# Choosing a Public API

When a task needs an external data source or service, query the `public-apis-live` MCP tools
before guessing a provider:

1. `list_categories` to see what's available.
2. `search_apis` with a `category` and/or `search` term; prefer `status: "up"` and `auth: "none"`
   for zero-setup options.
3. `get_api` for full details (URL, auth, HTTPS) before recommending one.

Always tell the user the auth requirement and that status reflects *reachability*, not functional testing.
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat(plugin): Claude plugin manifest + choosing-an-api skill"
```

---

## Task 13: GitHub Actions daily refresh

**Files:** Create `.github/workflows/refresh.yml`

- [ ] **Step 1: Implement workflow**

```yaml
name: refresh
on:
  schedule: [{ cron: "0 6 * * *" }]
  workflow_dispatch:
jobs:
  refresh:
    runs-on: ubuntu-latest
    permissions: { contents: write }
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm refresh
      - name: Commit refreshed data
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data README.md packages/core/apis.json
          git diff --staged --quiet || git commit -m "chore: daily refresh $(date -u +%F)"
          git push
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "ci: daily reachability refresh workflow"
```

---

## Self-Review Notes

- **Spec coverage:** §3 architecture → Tasks 1,9,11,12; §4 pipeline → Tasks 3,4,5,8,10; §5 schema → Task 2; §6 surfaces → README (7,10), npm (9), plugin (11,12); §7 CI → Task 13; §9 testing → tests in Tasks 2–9.
- **Verification honesty (§2):** README header text in Task 7 states reachability-only explicitly. ✅
- **Type consistency:** `ApiEntry`, `RawEntry`, `Status`, `Auth`, `findApis/getApi/listCategories`, `runPipeline`, `mergeAndDedupe`, `verifyReachability`, `classify`, `renderReadme`, `renderBadge` are used consistently across tasks.
- **No network in unit tests:** all pipeline/verify tests inject `fetchFn`/`probeFn`; only Task 10 step 2 hits the network intentionally.
