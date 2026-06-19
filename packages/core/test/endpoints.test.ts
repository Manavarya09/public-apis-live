import { describe, it, expect } from "vitest";
import { parseOpenApiEndpoints } from "../src/endpoints.js";

const spec = {
  paths: {
    "/facts": {
      get: { summary: "List cat facts" },
      post: { summary: "Create a fact" },
    },
    "/facts/{id}": {
      get: { summary: "Get one fact" },
      parameters: [], // not an HTTP method, must be ignored
    },
  },
};

describe("parseOpenApiEndpoints", () => {
  const eps = parseOpenApiEndpoints(spec);
  it("extracts method + path for each operation", () => {
    expect(eps).toHaveLength(3);
    expect(eps).toContainEqual({ method: "GET", path: "/facts", summary: "List cat facts" });
    expect(eps).toContainEqual({ method: "POST", path: "/facts", summary: "Create a fact" });
  });
  it("ignores non-method keys like parameters", () => {
    expect(eps.some((e) => e.method === "PARAMETERS")).toBe(false);
  });
  it("handles a missing/empty spec", () => {
    expect(parseOpenApiEndpoints({})).toEqual([]);
    expect(parseOpenApiEndpoints(null)).toEqual([]);
  });
});
