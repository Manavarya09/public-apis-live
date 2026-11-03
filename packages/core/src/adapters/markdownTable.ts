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

// Strip inline-markdown emphasis markers (**bold**, _italic_, `code`) and collapse whitespace.
function clean(s: string): string {
  return s.replace(/\*\*|__|`|\*|_/g, "").replace(/\s+/g, " ").trim();
}

export function parseMarkdownTable(md: string, sourceRepo: string): RawEntry[] {
  const out: RawEntry[] = [];
  let category = "Uncategorized";
  let columns: Map<string, number> | undefined;
  for (const line of md.split("\n")) {
    const h = line.match(/^#{2,4}\s+(.+?)\s*$/);
    if (h) {
      category = h[1].trim();
      columns = undefined;
      continue;
    }
    if (!line.trim().startsWith("|")) {
      columns = undefined;
      continue;
    }
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length < 2) continue;
    const headers = cells.map((c) => clean(c).toLowerCase());
    if (headers.includes("description") && (headers.includes("api") || headers.includes("name"))) {
      columns = new Map(headers.map((name, index) => [name, index]));
      continue;
    }
    // A transport label is not an HTTPS assertion. This REST model cannot
    // represent an MCP-only table without inventing HTTPS/CORS metadata.
    if (columns?.has("transport") && !columns.has("https")) continue;
    const cell = (name: string, fallback: number): string | undefined => {
      const index = columns ? columns.get(name) : fallback;
      return index === undefined ? undefined : cells[index];
    };
    const link = (cell(columns?.has("api") ? "api" : "name", 0) ?? "").match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!link) continue; // skips header + separator rows
    const auth = cell("auth", 2);
    const https = cell("https", 3);
    const cors = cell("cors", 4);
    out.push({
      name: clean(link[1]),
      url: link[2].trim(),
      description: clean(cell("description", 1) ?? ""),
      category,
      auth: auth !== undefined ? normAuth(auth) : "unknown",
      https: https !== undefined ? yes(https) : false,
      cors: cors !== undefined && yes(cors) ? "yes" : "unknown",
      sourceRepo,
    });
  }
  return out;
}
