import { describe, it, expect } from "vitest";
import { classify, classifyResult, isHomepageRedirect, verifyReachability, isDataResponse, verifyFunctional } from "../src/verify.js";
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
    await verifyReachability([e], 5, async () => ({ code: 200 }));
    expect(e.status).toBe("up");
    expect(e.httpCode).toBe(200);
  });
});

describe("isHomepageRedirect", () => {
  it("flags redirect to a different domain's homepage", () => {
    expect(isHomepageRedirect("https://api.nytimes.com/svc/movies", "https://www.nytimes.com/", true)).toBe(true);
  });
  it("does not flag same-host or http->https redirects", () => {
    expect(isHomepageRedirect("http://catfact.ninja", "https://catfact.ninja/", true)).toBe(false);
  });
  it("does not flag redirect to a real path on another domain", () => {
    expect(isHomepageRedirect("https://a.com", "https://b.com/docs/api", true)).toBe(false);
  });
  it("ignores when not redirected", () => {
    expect(isHomepageRedirect("https://a.com", "https://b.com/", false)).toBe(false);
  });
});

describe("classifyResult", () => {
  it("downgrades a homepage-redirect from up to unknown", () => {
    const r = classifyResult("https://api.nytimes.com/svc/movies", { code: 200, url: "https://www.nytimes.com/", redirected: true });
    expect(r.status).toBe("unknown");
  });
  it("keeps a normal 200 as up", () => {
    expect(classifyResult("https://a.com", { code: 200, url: "https://a.com/", redirected: false }).status).toBe("up");
  });
});

describe("isDataResponse", () => {
  it("true for 2xx with JSON/text body", () => {
    expect(isDataResponse(200, '{"a":1}')).toBe(true);
    expect(isDataResponse(200, "plain text")).toBe(true);
  });
  it("false for HTML pages, empty bodies, and non-2xx", () => {
    expect(isDataResponse(200, "<!doctype html><html>")).toBe(false);
    expect(isDataResponse(200, "   ")).toBe(false);
    expect(isDataResponse(404, '{"a":1}')).toBe(false);
    expect(isDataResponse(null, null)).toBe(false);
  });
});

describe("verifyFunctional", () => {
  it("flags returnsData only for up + no-auth entries", async () => {
    const up: ApiEntry = { id: "a", name: "A", description: "", category: "c", url: "https://a.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["x"], status: "up" };
    const keyed: ApiEntry = { id: "b", name: "B", description: "", category: "c", url: "https://b.com", auth: "apiKey", https: true, cors: "unknown", sourceRepos: ["x"], status: "up" };
    const down: ApiEntry = { id: "d", name: "D", description: "", category: "c", url: "https://d.com", auth: "none", https: true, cors: "unknown", sourceRepos: ["x"], status: "down" };
    await verifyFunctional([up, keyed, down], 5, async () => ({ code: 200, body: '{"ok":true}' }));
    expect(up.returnsData).toBe(true);
    expect(keyed.returnsData).toBeUndefined(); // auth required, skipped
    expect(down.returnsData).toBeUndefined(); // not reachable, skipped
  });
});
