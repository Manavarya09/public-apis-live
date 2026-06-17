import { describe, it, expect } from "vitest";
import { renderBenchmark } from "../src/emit/benchmark.js";
import type { Benchmark } from "../src/benchmark.js";

const b: Benchmark = {
  overall: { label: "public-apis-live (merged, deduped)", total: 4, up: 2, down: 1, unknown: 1, workingRate: 50, deadRate: 25 },
  sources: [
    { label: "public-apis/public-apis", total: 100, up: 80, down: 15, unknown: 5, workingRate: 80, deadRate: 15 },
  ],
};

describe("renderBenchmark", () => {
  const md = renderBenchmark(b, "2026-06-17");
  it("has a title and methodology date", () => {
    expect(md).toContain("# Benchmark");
    expect(md).toContain("2026-06-17");
  });
  it("renders the overall row and a source row with rates", () => {
    expect(md).toContain("public-apis-live (merged, deduped)");
    expect(md).toContain("public-apis/public-apis");
    expect(md).toContain("80%"); // working rate
    expect(md).toContain("15%"); // dead rate
  });
});
