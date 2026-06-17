import type { ApiEntry, Status } from "../types.js";

const emoji: Record<Status, string> = { up: "✅", down: "❌", unknown: "❔" };
const statusRank: Record<Status, number> = { up: 0, unknown: 1, down: 2 };

export function renderReadme(data: ApiEntry[], date: string): string {
  const up = data.filter((a) => a.status === "up").length;
  const cats = [...new Set(data.map((a) => a.category))].sort();
  const head = [
    "# public-apis-live",
    "",
    "[![public APIs](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Manavarya09/public-apis-live/main/data/badge.json)](https://manavarya09.github.io/public-apis-live/)",
    "",
    `**${data.length} public APIs · ${up} reachable · verified ${date}**`,
    "",
    "The only public-API list where every entry is auto-checked for reachability and refreshed daily.",
    "",
    "**[🔎 Search them all in the browser →](https://manavarya09.github.io/public-apis-live/)** · **[📊 See the benchmark →](./BENCHMARK.md)**",
    "",
    "> **How verification works:** we only check *reachability* (no API keys). ✅ = the server",
    "> responded (incl. auth/rate-limit codes), ❌ = DNS/connection failure, 5xx, or 404, ❔ = timeout.",
    "> We do **not** functionally test endpoints.",
    "",
  ];
  const body: string[] = [];

  // Most reliable APIs: highest uptime over the tracked window, ties broken by more checks then speed.
  const ranked = data
    .filter((a) => a.uptimePct !== undefined && (a.checks ?? 0) > 0)
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
      "_Ranked by uptime across daily reachability checks (ties broken by response time)._",
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
    const inCat = data
      .filter((d) => d.category === cat)
      .sort((a, b) => statusRank[a.status] - statusRank[b.status] || a.name.localeCompare(b.name));
    for (const a of inCat) {
      body.push(`| [${a.name}](${a.url}) | ${a.description} | ${a.auth} | ${a.https ? "Yes" : "No"} | ${emoji[a.status]} |`);
    }
    body.push("");
  }
  return [...head, ...body].join("\n");
}
