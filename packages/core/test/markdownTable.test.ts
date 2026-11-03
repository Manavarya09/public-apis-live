import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { parseMarkdownTable } from "../src/adapters/markdownTable.js";

const md = readFileSync(new URL("./fixtures/sample.md", import.meta.url), "utf8");

describe("parseMarkdownTable", () => {
  const rows = parseMarkdownTable(md, "public-apis/public-apis");
  it("parses all rows across categories", () => expect(rows).toHaveLength(3));
  it("extracts name + url from the markdown link", () => {
    const cat = rows.find((r) => r.name === "Cat Facts")!;
    expect(cat.url).toBe("https://catfact.ninja");
    expect(cat.category).toBe("Animals");
    expect(cat.auth).toBe("none");
    expect(cat.https).toBe(true);
    expect(cat.sourceRepo).toBe("public-apis/public-apis");
  });
  it("maps apiKey auth and books category", () => {
    expect(rows.find((r) => r.name === "Dogs")!.auth).toBe("apiKey");
    expect(rows.find((r) => r.name === "Open Library")!.category).toBe("Books");
  });
  it("strips inline markdown from name and description", () => {
    const md =
      "### X\n\n| API | Description | Auth | HTTPS | CORS |\n|---|---|---|---|---|\n| [**Bold Cat**](https://b.com) | A `code` and _italic_ desc | No | Yes | No |\n";
    const r = parseMarkdownTable(md, "a/b")[0];
    expect(r.name).toBe("Bold Cat");
    expect(r.description).toBe("A code and italic desc");
  });

  it("does not turn MCP transport labels into negative HTTPS claims", () => {
    const md = `### Agent tools
| Name | Description | Auth | Transport | Install |
|---|---|---|---|---|
| [BlockVectra](https://github.com/blockvectra/mcp) | Blockchain tools | apiKey | HTTP | Yes |
| [Local tool](https://example.com/local) | Local process | No | stdio | No |
| [Mixed tool](https://example.com/mixed) | Two transports | token | stdio, HTTP | Yes |
`;
    expect(parseMarkdownTable(md, "test/source")).toEqual([]);
  });

  it("reads REST metadata by its headers even when columns are reordered", () => {
    const md = `### Services
| CORS | Name | HTTPS | Description | Auth |
|---|---|---|---|---|
| Yes | [Secure](https://example.com) | Yes | A service | apiKey |
| No | [Plain](http://example.org) | No | Another service | No |
`;
    expect(parseMarkdownTable(md, "test/source")).toEqual([
      { name: "Secure", url: "https://example.com", description: "A service", category: "Services", auth: "apiKey", https: true, cors: "yes", sourceRepo: "test/source" },
      { name: "Plain", url: "http://example.org", description: "Another service", category: "Services", auth: "none", https: false, cors: "unknown", sourceRepo: "test/source" },
    ]);
  });

  it("keeps REST tables before and after an MCP table in the same category", () => {
    const md = `### Tools
| API | Description | Auth | HTTPS | CORS |
|---|---|---|---|---|
| [Before](https://example.com/before) | REST and MCP documentation | No | Yes | No |
| Name | Description | Auth | Transport | Install |
|---|---|---|---|---|
| [MCP](https://example.com/mcp) | A tool | apiKey | HTTP | Yes |
| API | Description | Auth | HTTPS | CORS |
|---|---|---|---|---|
| [After](http://example.com/after) | REST service | No | No | Yes |
`;
    const rows = parseMarkdownTable(md, "test/source");
    expect(rows.map((r) => [r.name, r.https, r.cors])).toEqual([
      ["Before", true, "unknown"], ["After", false, "yes"],
    ]);
  });

  it("does not infer service HTTPS from a linked repository or install column", () => {
    const md = `### Tools
| Name | Description | Install | HTTPS | Auth | Transport |
|---|---|---|---|---|---|
| [Explicit](https://github.com/example/server) | Explicit source assertion | Yes | No | token | HTTP |
`;
    const [row] = parseMarkdownTable(md, "test/source");
    expect(row.https).toBe(false);
    expect(row.auth).toBe("token");
    expect(row.cors).toBe("unknown");
  });

  it("keeps the existing behavior for two-column and headerless legacy lists", () => {
    const md = `### Legacy
| API | Description |
|---|---|
| [Short](https://example.com/short) | Short list |

| [Unheaded](http://example.com/unheaded) | Old row | No | No | Yes |
`;
    const rows = parseMarkdownTable(md, "test/source");
    expect(rows.map((r) => [r.name, r.auth, r.https, r.cors])).toEqual([
      ["Short", "unknown", false, "unknown"], ["Unheaded", "none", false, "yes"],
    ]);
  });
});
