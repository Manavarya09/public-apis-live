import { describe, it, expect } from "vitest";
import { parseApisGuru } from "../src/adapters/apisGuru.js";

const sample = JSON.stringify({
  "1forge.com": {
    preferred: "0.0.1",
    versions: {
      "0.0.1": {
        info: {
          title: "1Forge Finance APIs",
          description: "Stock and Forex Data and Realtime Quotes\nSecond line.",
          "x-providerName": "1forge.com",
          "x-apisguru-categories": ["financial"],
          license: { name: "MIT" },
        },
        externalDocs: { url: "https://1forge.com/forex-data-api" },
      },
    },
  },
  "googleapis.com:admin": {
    preferred: "directory_v1",
    versions: {
      directory_v1: {
        info: {
          title: "Admin SDK API",
          description: "Admin SDK lets administrators manage their organization.",
          "x-providerName": "googleapis.com",
        },
      },
    },
  },
});

describe("parseApisGuru", () => {
  const rows = parseApisGuru(sample, "APIs.guru");
  it("parses one entry per API key", () => expect(rows).toHaveLength(2));
  it("maps title, single-line description, and prefers the docs URL", () => {
    const f = rows.find((r) => r.name === "1Forge Finance APIs")!;
    expect(f.url).toBe("https://1forge.com/forex-data-api");
    expect(f.description).toBe("Stock and Forex Data and Realtime Quotes Second line.");
    expect(f.category).toBe("Financial");
    expect(f.auth).toBe("unknown");
    expect(f.https).toBe(true);
    expect(f.license).toBe("MIT");
    expect(f.sourceRepo).toBe("APIs.guru");
  });
  it("falls back to Enterprise category when none given", () => {
    expect(rows.find((r) => r.name === "Admin SDK API")!.category).toBe("Enterprise");
    expect(rows.find((r) => r.name === "Admin SDK API")!.url).toBe("https://googleapis.com");
  });
});
