#!/usr/bin/env node
import readline from "node:readline";
import { apis, findApis, getApi, listCategories, fetchEndpoints } from "./index.js";
import { renderCliLines, C } from "./cliFormat.js";
import type { Auth } from "./types.js";

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["--category", "--auth", "--limit"]);
const flag = (f: string) => {
  const i = argv.indexOf(f);
  return i >= 0 ? argv[i + 1] : undefined;
};
const queryParts: string[] = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith("--")) {
    if (VALUE_FLAGS.has(argv[i])) i++;
    continue;
  }
  queryParts.push(argv[i]);
}
const query = queryParts.join(" ");
const color = process.stdout.isTTY === true;
const working = apis.filter((a) => a.status === "up").length;
const paint = (code: string, s: string) => (color ? code + s + C.reset : s);

function search(q: string, opts: { category?: string; auth?: string; all?: boolean; limit?: number } = {}) {
  let res = findApis({ search: q || undefined, category: opts.category, auth: opts.auth as Auth | undefined });
  if (!opts.all) res = res.filter((a) => a.status === "up");
  return res.slice(0, opts.limit ?? 20);
}

function banner() {
  console.log(paint(C.cyan + C.bold, "\n  public-apis-live"));
  console.log(paint(C.dim, `  ${working} working public APIs of ${apis.length}, verified daily`));
  console.log(paint(C.dim, `  ${listCategories().length} categories · https://manavarya09.github.io/public-apis-live/\n`));
}

// Interactive mode: a search loop you can keep typing into.
function interactive() {
  banner();
  console.log(paint(C.dim, "  type a search (e.g. weather, currency, images). q to quit.\n"));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = () =>
    rl.question(paint(C.bold, "search > "), (input) => {
      const q = input.trim();
      if (q === "q" || q === "quit") return rl.close();
      if (q) console.log(renderCliLines(search(q, { limit: 15 }), q, color).join("\n") + "\n");
      ask();
    });
  ask();
}

if (argv.includes("--help") || argv.includes("-h")) {
  banner();
  console.log("  usage:");
  console.log("    npx public-apis-live                 interactive search");
  console.log("    npx public-apis-live <query>         one-shot search");
  console.log("    npx public-apis-live <query> --json  machine-readable");
  console.log("    npx public-apis-live endpoints <id>  list an API's real endpoints (OpenAPI)\n");
  console.log("  flags: --category <name>  --auth <none|apiKey|OAuth|token>  --all  --limit <n>\n");
} else if (argv[0] === "endpoints") {
  const id = argv[1] ?? "";
  const api = getApi(id) ?? findApis({ search: id }).filter((a) => a.specUrl)[0] ?? findApis({ search: id })[0];
  if (!api) console.log(`\nno API found for "${id}". try: npx public-apis-live ${id || "<query>"}\n`);
  else if (!api.specUrl) console.log(`\n${api.name} has no OpenAPI spec on file. base url: ${api.url}\n`);
  else {
    const eps = await fetchEndpoints(api.specUrl);
    console.log(paint(C.bold, `\n${api.name} — ${eps.length} endpoints`) + paint(C.dim, ` (${api.specUrl})\n`));
    if (api.returnsData && api.sampleEndpoint) {
      console.log(paint(C.green, "  ✓ verified call: ") + api.sampleEndpoint);
      console.log(paint(C.dim, "  → " + (api.sampleResponse ?? "").replace(/\s+/g, " ").slice(0, 120)) + "\n");
    }
    for (const e of eps.slice(0, 60)) {
      console.log(`  ${paint(C.green, e.method.padEnd(6))} ${e.path}${e.summary ? paint(C.dim, "  " + e.summary) : ""}`);
    }
    console.log("");
  }
} else if (argv.includes("--json")) {
  console.log(JSON.stringify(search(query, { category: flag("--category"), auth: flag("--auth"), all: argv.includes("--all"), limit: Number(flag("--limit") ?? 20) }), null, 2));
} else if (query || flag("--category")) {
  const res = search(query, { category: flag("--category"), auth: flag("--auth"), all: argv.includes("--all"), limit: Number(flag("--limit") ?? 20) });
  console.log(renderCliLines(res, query, color).join("\n"));
} else if (process.stdin.isTTY) {
  interactive();
} else {
  banner();
  console.log('  search: npx public-apis-live <query>   (e.g. "weather")\n');
}
