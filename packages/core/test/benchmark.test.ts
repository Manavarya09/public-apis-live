import { describe, it, expect } from "vitest";
import { computeBenchmark } from "../src/benchmark.js";
import type { ApiEntry } from "../src/types.js";

const e = (id: string, status: ApiEntry["status"], sources: string[]): ApiEntry => ({
  id, name: id, description: "", category: "c", url: `https://${id}.com`,
  auth: "none", https: true, cors: "unknown", sourceRepos: sources, status,
});

const data: ApiEntry[] = [
  e("a", "up", ["x/one"]),
  e("b", "down", ["x/one"]),
  e("c", "up", ["x/one", "y/two"]),
  e("d", "unknown", ["y/two"]),
];

describe("computeBenchmark", () => {
  const b = computeBenchmark(data);
  it("overall counts the merged set", () => {
    expect(b.overall.total).toBe(4);
    expect(b.overall.up).toBe(2);
    expect(b.overall.down).toBe(1);
    expect(b.overall.unknown).toBe(1);
    expect(b.overall.workingRate).toBe(50);
  });
  it("computes per-source stats including shared entries", () => {
    const one = b.sources.find((s) => s.label === "x/one")!;
    expect(one.total).toBe(3);
    expect(one.up).toBe(2);
    expect(one.down).toBe(1);
    expect(one.deadRate).toBeCloseTo(33.3, 1);
  });
  it("lists sources sorted", () => {
    expect(b.sources.map((s) => s.label)).toEqual(["x/one", "y/two"]);
  });
});
