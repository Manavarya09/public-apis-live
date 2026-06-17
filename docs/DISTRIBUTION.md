# Distribution Strategy

Goal: maximize GitHub stars (and the npm/agent adoption that compounds into them) for
`public-apis-live`. Stars are a *lagging* indicator of **(demonstrably best) × (discovered)** — this
doc is about engineering the second factor, because the first is already built.

## 1. Positioning (the one-liner)

> **Every public API in one place — and the only list where every link is verified working, refreshed daily.**

Sub-hooks per audience:
- **Browsers/bookmarkers:** "public-apis, but nothing's dead." (the README is the product)
- **JS devs / vibecoders:** "`npm i public-apis-live` — query 4,000+ working APIs in code, offline."
- **AI / agent builders:** "A Claude plugin + MCP server so your agent picks a *working* API for any task."

## 2. The wedge (lead with a number, never an adjective)

The benchmark is the campaign. The headline claim is concrete and screenshot-able:

> The famous public-apis list has **122 dead links** and ~**19.5% not confirmed working**.
> public-apis-live verifies all **4,287** every day. Here's the data: `BENCHMARK.md`.

Every post, README, and tweet leads with this. Numbers travel; "better" doesn't.

## 3. Audiences & where they are

| Segment | Where they hang out | What converts them |
|---|---|---|
| General devs | Hacker News, r/programming, r/webdev, X/Twitter, dev.to | The benchmark + "no dead links" |
| JS/TS devs | npm, r/javascript, X, Bluesky | The npm one-liner + offline dataset |
| AI/agent builders | r/LocalLLaMA, MCP/Claude communities, X | The MCP plugin + "agents pick working APIs" |
| Students/hackathoners | r/learnprogramming, Discords, DEV | "Free APIs that actually work for your project" |

## 4. Channels, in priority order

1. **Hacker News (Show HN)** — highest-leverage single event. Title:
   *"Show HN: I checked every API in the public-apis list — 19% are dead. So I built a verified one."*
   Post Tue–Thu ~8–10am ET. First comment = methodology + benchmark table + honest limitations
   (reachability ≠ functional). Reply to every comment for the first 3 hours.
2. **Reddit** — stagger over days, not all at once: r/programming, r/webdev, r/javascript,
   r/LocalLLaMA (agent angle), r/learnprogramming (free-APIs angle). Tailor the title per sub.
3. **X/Twitter + Bluesky** — a thread: the benchmark chart, the live-search GIF, the npm one-liner,
   the MCP demo. Tag dev-tool aggregators. Pin it.
4. **Newsletters/aggregators** — submit to Console.dev, TLDR, Changelog, Node Weekly, JavaScript
   Weekly, Awesome lists. Open a PR adding the repo to relevant `awesome-*` lists (and, cheekily, as
   a "verified mirror" reference from API-list READMEs where allowed).
5. **dev.to / Hashnode post** — long-form: "How I benchmarked every public API list." Evergreen SEO.
6. **Product Hunt** — secondary; better for the website than the repo. Launch after HN traction.

## 5. Launch sequence

**Pre-launch (before any post):**
- [ ] README polished, badge live, BENCHMARK.md linked at top, GIF of live search embedded.
- [ ] npm package published (`public-apis-live`) so the install line works the moment people read it.
- [ ] 3–4 days of daily-refresh commits visible (proves "living repo").
- [ ] Repo description, topics, social-preview image set.
- [ ] A 15-sec screen recording: search → filter → click. Hosted in README.

**Launch day:** Show HN in the morning → X thread → 1–2 subreddits. Be present to answer.

**Sustain (the flywheel):** the daily CI refresh is recurring content. Monthly: tweet the updated
benchmark ("this month: N new APIs, M went dead"). The uptime history (30-day) becomes a "most
reliable APIs" post once it has real data. Each is a fresh, data-backed reason to re-share.

## 6. Assets checklist

- [ ] Social preview image (the benchmark table as a clean graphic)
- [ ] Live-search GIF/video
- [ ] Show HN copy + pinned methodology comment
- [ ] X thread draft
- [ ] Per-subreddit titles
- [ ] dev.to long-form draft
- [ ] One-paragraph "submit to newsletter" blurb

## 7. Funnel & metrics

`Impressions → repo visit → ⭐ (and npm install / plugin add)`

Track weekly: stars (+velocity), npm weekly downloads, unique clones, referrer sources
(GitHub Insights → Traffic). Know which channel actually drove stars so you double down.
Rough North-Star checkpoints: 1k (validated), 10k (front-page hit + sustained), 100k
(category-defining — requires becoming the *default* link people share, which is months of
flywheel, not one launch).

## 8. Honest risks & how we de-risk

- **"It's just public-apis with extra steps."** → Counter with the benchmark number up front; that's
  a capability they literally cannot match without our infra.
- **Reachability overclaim backlash.** → Be loud that it's reachability, not functional testing. The
  honesty *is* the credibility. Never imply more than we measure.
- **One-day spike, no retention.** → The flywheel (daily data, monthly benchmark posts, uptime
  rankings) keeps giving reasons to return and re-share.
- **Source attribution / goodwill.** → Credit every source list prominently (we already store
  provenance). Frame as "verifying and unifying the ecosystem," not replacing it.
