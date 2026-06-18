import type { ApiEntry } from "./types.js";

export const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  gray: "\x1b[90m",
};

const trunc = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + "…" : s);

// Renders search results as aligned terminal lines. Padding is applied to plain text before
// color codes are added, so ANSI sequences (zero visible width) never break column alignment.
export function renderCliLines(results: ApiEntry[], query: string, color = false): string[] {
  const wrap = (code: string, s: string) => (color ? code + s + C.reset : s);
  const head = `🔎 ${results.length} working APIs${query ? ` for "${query}"` : ""}:`;
  const lines: string[] = ["", wrap(C.bold, head), ""];
  for (const a of results) {
    const name = trunc(a.name, 28).padEnd(29);
    const auth = a.auth.padEnd(8);
    const nameC = wrap(C.cyan + C.bold, name);
    const authC = wrap(a.auth === "none" ? C.green : C.yellow, auth);
    const urlC = wrap(C.gray, a.url);
    lines.push(`  ${nameC} ${authC} ${urlC}`);
  }
  lines.push("", wrap(C.dim, "more: https://manavarya09.github.io/public-apis-live/"));
  return lines;
}
