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
    if (h) {
      category = h[1].trim();
      continue;
    }
    if (!line.trim().startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
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
