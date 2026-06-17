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
});
