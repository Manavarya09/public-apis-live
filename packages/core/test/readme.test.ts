import { describe, it, expect } from "vitest";
import { renderReadme } from "../src/emit/readme.js";
import { renderBadge } from "../src/emit/badge.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "cats", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up", httpCode: 200 },
  { id: "dog", name: "Dogs", description: "dogs", category: "Animals", url: "https://dog.ceo", auth: "apiKey", https: true, cors: "yes", sourceRepos: ["a/b"], status: "down", httpCode: 503 },
];

describe("emit", () => {
  const md = renderReadme(data, "2026-06-17");
  it("has a category heading and rows", () => {
    expect(md).toContain("### Animals");
    expect(md).toContain("[Cat Facts](https://catfact.ninja)");
  });
  it("shows status emoji", () => {
    expect(md).toContain("✅");
    expect(md).toContain("❌");
  });
  it("badge json reports reachable count", () => {
    const badge = JSON.parse(renderBadge(data));
    expect(badge.message).toBe("1 reachable");
  });
});
