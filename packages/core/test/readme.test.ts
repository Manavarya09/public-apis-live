import { describe, it, expect } from "vitest";
import { renderReadme } from "../src/emit/readme.js";
import { renderBadge } from "../src/emit/badge.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "cats", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up", httpCode: 200, uptimePct: 100, checks: 8, responseMs: 120 },
  { id: "dog", name: "Dogs", description: "dogs", category: "Animals", url: "https://dog.ceo", auth: "apiKey", https: true, cors: "yes", sourceRepos: ["a/b"], status: "down", httpCode: 503, uptimePct: 40, checks: 8, responseMs: 90 },
];

describe("emit", () => {
  const md = renderReadme(data, "2026-06-17");
  it("has a category heading and rows", () => {
    expect(md).toContain("### Animals");
    expect(md).toContain("[Cat Facts](https://catfact.ninja)");
  });
  it("links to the live site and badge", () => {
    expect(md).toContain("https://manavarya09.github.io/public-apis-live/");
    expect(md).toContain("img.shields.io/endpoint");
  });
  it("lists reachable APIs up top and dead/unverified ones in the section below", () => {
    const mixed: ApiEntry[] = [
      { id: "z", name: "Zebra", description: "", category: "Animals", url: "https://z.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "down" },
      { id: "a", name: "Aardvark", description: "", category: "Animals", url: "https://a.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up" },
      { id: "b", name: "Buffalo", description: "", category: "Animals", url: "https://b.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "unknown" },
    ];
    const out = renderReadme(mixed, "2026-06-17");
    expect(out).toContain("Aardvark");
    expect(out).toContain("Unverified & unreachable (2)");
    // working entry appears before the below section that holds the dead/unverified ones
    expect(out.indexOf("Aardvark")).toBeLessThan(out.indexOf("Zebra"));
    expect(out.indexOf("Aardvark")).toBeLessThan(out.indexOf("Buffalo"));
  });
  it("renders Most reliable APIs only for entries with enough history", () => {
    expect(md).toContain("Most reliable APIs"); // cat has 8 checks
    const reliableIdx = md.indexOf("Most reliable APIs");
    expect(md.indexOf("Cat Facts", reliableIdx)).toBeGreaterThan(-1);
  });
  it("omits the Most reliable section on day 1 (only 1 check)", () => {
    const dayOne = data.map((d) => ({ ...d, checks: 1 }));
    expect(renderReadme(dayOne, "2026-06-17")).not.toContain("Most reliable APIs");
  });
  it("shows working markers up top and dead markers in the section below", () => {
    expect(md).toContain("✅");
    expect(md).toContain("❌");
    expect(md.indexOf("✅")).toBeLessThan(md.indexOf("❌"));
  });
  it("badge json reports reachable count", () => {
    const badge = JSON.parse(renderBadge(data));
    expect(badge.message).toBe("1 reachable");
  });
});
