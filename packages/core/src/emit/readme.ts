import type { ApiEntry, Status } from "../types.js";

const emoji: Record<Status, string> = { up: "✅", down: "❌", unknown: "❔" };

export function renderReadme(data: ApiEntry[], date: string): string {
  const up = data.filter((a) => a.status === "up").length;
  const cats = [...new Set(data.map((a) => a.category))].sort();
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
    for (const a of data.filter((d) => d.category === cat)) {
      body.push(`| [${a.name}](${a.url}) | ${a.description} | ${a.auth} | ${a.https ? "Yes" : "No"} | ${emoji[a.status]} |`);
    }
    body.push("");
  }
  return [...head, ...body].join("\n");
}
