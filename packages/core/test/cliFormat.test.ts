import { describe, it, expect } from "vitest";
import { renderCliLines } from "../src/cliFormat.js";
import type { ApiEntry } from "../src/types.js";

const r: ApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up" },
];

describe("renderCliLines", () => {
  const out = renderCliLines(r, "cat").join("\n");
  it("shows the count and query", () => expect(out).toContain('1 working APIs for "cat"'));
  it("shows the api name and url", () => {
    expect(out).toContain("Cat Facts");
    expect(out).toContain("https://catfact.ninja");
  });
});
