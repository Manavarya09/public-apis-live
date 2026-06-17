import { describe, it, expect } from "vitest";
import { renderReadme } from "../src/emit/readme.js";
import { renderBadge } from "../src/emit/badge.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "cats", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up", httpCode: 200, uptimePct: 100, checks: 5, responseMs: 120 },
  { id: "dog", name: "Dogs", description: "dogs", category: "Animals", url: "https://dog.ceo", auth: "apiKey", https: true, cors: "yes", sourceRepos: ["a/b"], status: "down", httpCode: 503, uptimePct: 40, checks: 5, responseMs: 90 },
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
  it("lists only reachable APIs, omitting dead/unverified ones", () => {
    const mixed: ApiEntry[] = [
      { id: "z", name: "Zebra", description: "", category: "Animals", url: "https://z.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "down" },
      { id: "a", name: "Aardvark", description: "", category: "Animals", url: "https://a.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up" },
      { id: "b", name: "Buffalo", description: "", category: "Animals", url: "https://b.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "unknown" },
    ];
    const out = renderReadme(mixed, "2026-06-17");
    expect(out).toContain("Aardvark");
    expect(out).not.toContain("Zebra");
    expect(out).not.toContain("Buffalo");
  });
  it("renders a Most reliable APIs section ranked by uptime", () => {
    expect(md).toContain("Most reliable APIs");
    const reliableIdx = md.indexOf("Most reliable APIs");
    const catIdx = md.indexOf("Cat Facts", reliableIdx);
    const dogIdx = md.indexOf("Dogs", reliableIdx);
    expect(catIdx).toBeGreaterThan(-1);
    expect(catIdx).toBeLessThan(dogIdx); // 100% ranks above 40%
  });
  it("marks listed APIs as working and shows no dead markers", () => {
    expect(md).toContain("✅");
    expect(md).not.toContain("❌");
  });
  it("badge json reports reachable count", () => {
    const badge = JSON.parse(renderBadge(data));
    expect(badge.message).toBe("1 reachable");
  });
});
