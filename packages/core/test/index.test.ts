import { describe, it, expect } from "vitest";
import * as pkg from "../src/index.js";

describe("package exports", () => {
  it("exposes query fns + pipeline", () => {
    expect(typeof pkg.findApis).toBe("function");
    expect(typeof pkg.getApi).toBe("function");
    expect(typeof pkg.listCategories).toBe("function");
    expect(typeof pkg.runPipeline).toBe("function");
    expect(Array.isArray(pkg.apis)).toBe(true);
  });
});
