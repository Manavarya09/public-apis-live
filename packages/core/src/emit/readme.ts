import type { ApiEntry, Status } from "../types.js";

const emoji: Record<Status, string> = { up: "✅", down: "❌", unknown: "❔" };
const statusRank: Record<Status, number> = { up: 0, unknown: 1, down: 2 };

// GitHub heading-anchor slug (matches github-slugger): lowercase, trim, drop punctuation
// (keep word chars/space/hyphen), then replace EACH whitespace char with "-" (no collapsing,
// so "Art & Design" -> "art--design", same as GitHub).
const anchor = (s: string) => s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s/g, "-");

export function renderReadme(data: ApiEntry[], date: string): string {
  const up = data.filter((a) => a.status === "up").length;
  const down = data.filter((a) => a.status === "down").length;
  const unknown = data.filter((a) => a.status === "unknown").length;
  const dataVerified = data.filter((a) => a.returnsData).length;
  // The directory shows only reachable APIs — the whole point is that every listed link works.
  const reachable = data.filter((a) => a.status === "up");
  const cats = [...new Set(reachable.map((a) => a.category))].sort();
  const head = [
    "# public-apis-live",
    "",
    "[![public APIs](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Manavarya09/public-apis-live/main/data/badge.json)](https://manavarya09.github.io/public-apis-live/)",
    "",
    `**${up} working public APIs · verified ${date} · refreshed daily**`,
    "",
    "Every API listed below responded to a reachability check today. Aggregated from the top public-API",
    "lists, deduped, and re-verified every day by CI.",
    "",
    "**[🔎 Search them all in the browser →](https://manavarya09.github.io/public-apis-live/)** · **[📊 See the benchmark →](./BENCHMARK.md)**",
    "",
    "### Use it",
    "",
    "```bash",
    "npm i public-apis-live          # query the dataset in code (offline)",
    "```",
    "As a Claude plugin (agents pick a working API for any task):",
    "```",
    "/plugin marketplace add https://github.com/Manavarya09/public-apis-live.git",
    "/plugin install public-apis-live",
    "```",
    "",
    "> **How verification works:** we check *reachability* (no API keys) daily. A working API means its",
    `> URL returned a success response (2xx/3xx) today. 📦 marks the ${dataVerified} no-auth APIs that also`,
    "> returned real data when called. We do **not** test auth-gated endpoints.",
    `> ${down} unreachable and ${unknown} unverified (timeouts, auth-walled, or bot-blocked) entries are`,
    "> listed at the bottom and counted in the benchmark.",
    "",
  ];
  const body: string[] = [];

  // Category index (table of contents) with per-category working-API counts.
  const countByCat = new Map<string, number>();
  for (const a of reachable) countByCat.set(a.category, (countByCat.get(a.category) ?? 0) + 1);
  if (cats.length) {
    body.push(
      `## Categories (${cats.length})`,
      "",
      cats.map((c) => `[${c}](#${anchor(c)}) (${countByCat.get(c)})`).join(" · "),
      "",
    );
  }

  // Most reliable APIs: only meaningful once there's real history, so require a week of checks.
  // Until then (e.g. day 1) the section is skipped entirely and the directory leads the README.
  const MIN_CHECKS = 7;
  const ranked = data
    .filter((a) => a.status === "up" && (a.checks ?? 0) >= MIN_CHECKS)
    .sort(
      (a, b) =>
        b.uptimePct! - a.uptimePct! ||
        (b.checks ?? 0) - (a.checks ?? 0) ||
        (a.responseMs ?? 1e9) - (b.responseMs ?? 1e9),
    )
    .slice(0, 20);
  if (ranked.length) {
    body.push(
      "## 🏆 Most reliable APIs",
      "",
      `_Highest uptime across at least ${MIN_CHECKS} daily reachability checks (ties broken by response time)._`,
      "",
      "| API | Uptime | Checks | Latency |",
      "|---|---|---|---|",
    );
    for (const a of ranked) {
      body.push(`| [${a.name}](${a.url}) | ${a.uptimePct}% | ${a.checks} | ${a.responseMs ?? "—"}ms |`);
    }
    body.push("");
  }

  for (const cat of cats) {
    body.push(`### ${cat}`, "", "| API | Description | Auth | HTTPS | Status |", "|---|---|---|---|---|");
    const inCat = reachable
      .filter((d) => d.category === cat)
      .sort((a, b) => statusRank[a.status] - statusRank[b.status] || a.name.localeCompare(b.name));
    for (const a of inCat) {
      const status = `${emoji[a.status]}${a.returnsData ? " 📦" : ""}`;
      body.push(`| [${a.name}](${a.url}) | ${a.description} | ${a.auth} | ${a.https ? "Yes" : "No"} | ${status} |`);
    }
    body.push("", "[↑ Back to top](#public-apis-live)", "");
  }

  // Everything that isn't confirmed working goes below, collapsed, so it never clutters the top.
  const rest = data
    .filter((a) => a.status !== "up")
    .sort((a, b) => statusRank[a.status] - statusRank[b.status] || a.name.localeCompare(b.name));
  if (rest.length) {
    body.push(
      `## ⚠️ Unverified & unreachable (${rest.length})`,
      "",
      "These responded with auth/blocked codes (❔) or failed today (❌). Kept for completeness and re-checked daily.",
      "",
      `<details><summary>Show ${rest.length} entries</summary>`,
      "",
      "| API | Category | Auth | Status |",
      "|---|---|---|---|",
    );
    for (const a of rest) {
      body.push(`| [${a.name}](${a.url}) | ${a.category} | ${a.auth} | ${emoji[a.status]} |`);
    }
    body.push("", "</details>", "");
  }

  return [...head, ...body].join("\n");
}
