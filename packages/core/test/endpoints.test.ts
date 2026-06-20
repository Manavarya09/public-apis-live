import { describe, it, expect } from "vitest";
import { parseOpenApiEndpoints, pickCallableEndpoint } from "../src/endpoints.js";

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

describe("pickCallableEndpoint", () => {
  it("builds a full URL for a parameter-less GET from an OpenAPI 3 spec", () => {
    const spec = {
      servers: [{ url: "https://api.example.com/v1" }],
      paths: {
        "/facts/{id}": { get: { summary: "one" } }, // templated path → skip
        "/facts": { get: { summary: "list" } },
      },
    };
    expect(pickCallableEndpoint(spec)).toBe("https://api.example.com/v1/facts");
  });

  it("skips GET operations that have a required parameter", () => {
    const spec = {
      servers: [{ url: "https://api.example.com" }],
      paths: {
        "/search": { get: { parameters: [{ name: "q", in: "query", required: true }] } },
        "/status": { get: {} },
      },
    };
    expect(pickCallableEndpoint(spec)).toBe("https://api.example.com/status");
  });

  it("builds the base URL from a Swagger 2 host/basePath/schemes", () => {
    const spec = {
      schemes: ["https"],
      host: "api.example.com",
      basePath: "/v2",
      paths: { "/ping": { get: {} } },
    };
    expect(pickCallableEndpoint(spec)).toBe("https://api.example.com/v2/ping");
  });

  it("returns null with no server info, no param-less GET, or empty spec", () => {
    expect(pickCallableEndpoint({ paths: { "/x": { get: {} } } })).toBeNull();
    expect(
      pickCallableEndpoint({ servers: [{ url: "https://a.com" }], paths: { "/x/{id}": { get: {} } } }),
    ).toBeNull();
    expect(pickCallableEndpoint(null)).toBeNull();
  });
});
