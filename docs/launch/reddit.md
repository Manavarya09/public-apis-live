# Reddit Launch Playbook

Reddit is the primary channel. It rewards useful + honest + data-driven, and **removes anything that
reads as self-promo**. Every post below leads with value (the benchmark/data), credits the original
public-apis project, and is honest about limits (reachability ≠ functional testing).

## Ground rules (read before posting anything)

1. **Don't post from a fresh/zero-karma account.** New accounts + a GitHub link = auto-spam-filtered.
   Spend a few days commenting genuinely first; get a little karma and account age.
2. **One sub per day, not a blast.** Cross-posting the same link to 6 subs in an hour trips spam
   detection and annoys mods. Space them out over ~2 weeks.
3. **Read each sub's rules + self-promo ratio.** Many enforce a 9:1 (contribute:promote) ratio. Follow
   posting-day rules (e.g. Showoff Saturday).
4. **Prefer self/text posts over link posts** where the sub allows — they convert better and dodge
   "just a link" removals. Put the GitHub + live-site links *in the body*.
5. **Lead with the finding, not the product.** "19% of the public-apis links are dead" is a finding.
   "I built a tool" is promo. Same facts, different reception.
6. **Be in the thread.** Reply to every comment for the first 2–3 hours. Engagement drives ranking.
7. **Tone: respectful, not a takedown.** You *love* public-apis; you found a gap and tried to fix it.
   Never trash the thing 330k people starred.

## Target subs (priority order)

| Sub | Angle | Format notes |
|---|---|---|
| r/SideProject | "I built this, here's the data" | Welcoming to launches; honest builder story works |
| r/coolgithubprojects | The repo | Strict post format (see below); link allowed |
| r/webdev | Free working APIs for your projects | Use **Showoff Saturday** or check daily rules |
| r/javascript | The npm package | **Self-post**, explanation-heavy; showcase posts get removed otherwise |
| r/programming | The benchmark finding | Data-driven title; crowd is critical — methodology must be airtight |
| r/LocalLLaMA | MCP plugin: agents pick working APIs | Agent/tooling crowd; lead with the MCP angle |
| r/opensource | Open-source, auto-verified, daily | Community-minded framing + attribution |
| r/InternetIsBeautiful | The live search site | Link to the site, not the repo |

---

## Ready-to-paste posts

### r/SideProject
**Title:** I checked every link in the 330k-star public-apis list — ~19% are dead. So I built one that verifies all 4,287 daily.

**Body:**
I use the public-apis list constantly, but I kept hitting dead links and stale entries. So I aggregated
the top public-API lists, deduped them, and ran a reachability check on every single one — then
automated it to re-run every day via CI.

The result so far:
- **4,287 APIs**, ~2,900 currently reachable, across 126 categories
- Every entry shows a live status (✅ responded / ❌ dead / ❔ timeout)
- A benchmark of the source lists: the original public-apis list had **122 dead links** and ~19.5%
  not confirmed working when I checked
- It also ships as an npm package and a Claude/MCP plugin so agents can pick a *working* API

Honest caveat: I only check **reachability** (no API keys), so "working" means the server responded —
not that every endpoint is functionally perfect. I'm upfront about that in the README.

Live search: https://manavarya09.github.io/public-apis-live/
Repo + benchmark: https://github.com/Manavarya09/public-apis-live

Would love feedback on what metadata would make it more useful (pricing? rate limits? example calls?).

---

### r/coolgithubprojects
> This sub requires a specific format. Use:

**Title:** [JavaScript] public-apis-live — aggregated public APIs with every link auto-verified daily

**Body:**
**Language:** TypeScript
**Link:** https://github.com/Manavarya09/public-apis-live
**Demo:** https://manavarya09.github.io/public-apis-live/

A daily-refreshed directory of 4,287 public APIs aggregated from the top lists, deduped, and checked
for reachability (with a benchmark showing how many links in each source list are actually dead). Ships
as a website, an npm package, and a Claude/MCP plugin. Reachability-only checks — honest about it.

---

### r/webdev (Showoff Saturday)
**Title:** [Showoff Saturday] A free-API directory where every link is auto-verified daily (no more dead links from public-apis)

**Body:**
Hitting dead links in the usual public-API lists drove me up the wall, so I built one that re-checks
every entry daily and shows its status. 4,287 APIs, searchable by category/auth/status, with fuzzy
search. Free, open source, and there's an npm package if you want to query them in code.

Live: https://manavarya09.github.io/public-apis-live/ · Repo: https://github.com/Manavarya09/public-apis-live

Only checks reachability (not full functional tests) — called out clearly in the README. Open to
feature ideas.

---

### r/javascript (must be a self-post with explanation)
**Title:** I packaged 4,287 auto-verified public APIs as an npm module (query/filter/fuzzy-search, offline)

**Body:**
`npm i public-apis-live` gives you a bundled dataset of public APIs aggregated from the top lists,
deduped, and reachability-checked daily. API:

```js
import { findApis, getApi, listCategories } from "public-apis-live";
findApis({ category: "Weather", auth: "none", status: "up" });
findApis({ search: "currency" }); // fuzzy, typo-tolerant (Fuse.js)
```

Data ships with the package, so queries are instant and work offline. It's a TS monorepo — the same
core powers a website and an MCP server too. Build notes: static-export Next site on Pages, daily
GitHub Actions refresh that commits the new dataset + a benchmark of each source list's dead-link rate.

Repo: https://github.com/Manavarya09/public-apis-live
Caveat: reachability checks only (no keys), so status = "server responded," not functional testing.
Happy to talk through the dedupe/verification design.

---

### r/LocalLLaMA
**Title:** MCP server that lets your agent pick a *working* public API for any task (4,287 APIs, verified daily)

**Body:**
Built an MCP server over a daily-verified directory of 4,287 public APIs. Tools: `search_apis`
(category/auth/status/fuzzy), `get_api`, `list_categories`. The point: instead of your agent
hallucinating an API or suggesting a dead one, it queries a list where every entry was reachability-
checked today. Also a plain npm package and a website.

Repo (plugin + MCP under /packages): https://github.com/Manavarya09/public-apis-live
Honest limit: reachability only, no functional/auth testing.

---

### r/programming
**Title:** I ran a reachability check on every API in the public-apis list — 122 are dead, ~19.5% aren't confirmed working

**Body:**
I aggregated the major public-API lists, deduped them, and checked every URL for reachability, then
automated a daily re-check. Surprising part was the benchmark across source lists — published as
`BENCHMARK.md`, regenerated by the same CI that builds the directory (so it's reproducible, not
hand-curated):

- public-apis/public-apis: 80.5% reachable, 122 dead, ~19.5% not confirmed working
- public-api-lists: 90.2% reachable
- APIs.guru: 53.5% (enterprise roots reject bare HEAD requests)

Methodology + limits (reachability ≠ functional testing, 401/403/429 counted as "alive") are in the
repo. Curious whether others have measured link-rot in awesome-lists at scale.

Repo: https://github.com/Manavarya09/public-apis-live

---

## Cadence (2-week rollout)

- **Day 1:** r/SideProject (friendliest, good first signal + feedback)
- **Day 3:** r/coolgithubprojects + r/opensource
- **Day 5–6:** r/webdev (Saturday, Showoff)
- **Day 8:** r/javascript (self-post)
- **Day 10:** r/LocalLLaMA
- **Day 12:** r/programming (only after the methodology has survived scrutiny elsewhere — this crowd
  is the harshest)
- **Anytime:** r/InternetIsBeautiful with the live site

Between posts: answer comments, fix anything reviewers flag, and let the daily commits accumulate.
Recycle wins — if one post lands, screenshot the reception for the next channel.

## What to have ready before Day 1

- [ ] npm package published (the `npm i` line must work)
- [ ] README badge + BENCHMARK link visible; live-search GIF embedded
- [ ] A couple days of daily-refresh commits showing
- [ ] You, free for ~3 hours after each post, to reply
