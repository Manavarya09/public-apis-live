import { describe, it, expect } from "vitest";
import { classify, verifyReachability } from "../src/verify.js";
import type { ApiEntry } from "../src/types.js";

describe("classify", () => {
  it("2xx/3xx → up", () => {
    expect(classify(200).status).toBe("up");
    expect(classify(301).status).toBe("up");
  });
  it("401/403/429 → unknown (responded but not usable as-is)", () => {
    expect(classify(401).status).toBe("unknown");
    expect(classify(403).status).toBe("unknown");
    expect(classify(429).status).toBe("unknown");
  });
  it("404/5xx → down", () => {
    expect(classify(404).status).toBe("down");
    expect(classify(503).status).toBe("down");
  });
  it("network error (null) → unknown", () => expect(classify(null).status).toBe("unknown"));
});

describe("verifyReachability", () => {
  it("verifies entries with injected fetch", async () => {
    const e: ApiEntry = {
      id: "x", name: "X", description: "", category: "c", url: "https://x.com",
      auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "unknown",
    };
    await verifyReachability([e], 5, async () => 200);
    expect(e.status).toBe("up");
    expect(e.httpCode).toBe(200);
  });
});
