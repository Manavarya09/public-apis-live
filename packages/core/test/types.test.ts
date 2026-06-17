import { describe, it, expect } from "vitest";
import type { ApiEntry } from "../src/types.js";

describe("types", () => {
  it("constructs an ApiEntry", () => {
    const e: ApiEntry = {
      id: "x", name: "X", description: "d", category: "c",
      url: "https://x.com", auth: "none", https: true, cors: "unknown",
      sourceRepos: ["a/b"], status: "unknown",
    };
    expect(e.id).toBe("x");
  });
});
