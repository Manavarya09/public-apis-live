import { describe, it, expect } from "vitest";
import { updateHistory, reliabilityPct, type History } from "../src/history.js";
import type { ApiEntry } from "../src/types.js";

const e = (id: string, status: ApiEntry["status"]): ApiEntry => ({
  id, name: id, description: "", category: "c", url: `https://${id}.com`,
  auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status,
});

describe("updateHistory", () => {
  it("appends one record per api per day", () => {
    const h = updateHistory({}, [e("a", "up")], "2026-06-17");
    expect(h.a).toEqual([{ d: "2026-06-17", s: "up" }]);
  });
  it("replaces same-day record instead of duplicating", () => {
    let h: History = updateHistory({}, [e("a", "up")], "2026-06-17");
    h = updateHistory(h, [e("a", "down")], "2026-06-17");
    expect(h.a).toEqual([{ d: "2026-06-17", s: "down" }]);
  });
  it("accumulates across days and trims to 30", () => {
    let h: History = {};
    for (let i = 1; i <= 35; i++) {
      h = updateHistory(h, [e("a", "up")], `2026-06-${String(i).padStart(2, "0")}`);
    }
    expect(h.a).toHaveLength(30);
    expect(h.a[0].d).toBe("2026-06-06"); // oldest kept
  });
  it("drops apis no longer present", () => {
    let h: History = updateHistory({}, [e("a", "up"), e("b", "up")], "2026-06-17");
    h = updateHistory(h, [e("a", "up")], "2026-06-18");
    expect(h.b).toBeUndefined();
  });
});

describe("reliabilityPct", () => {
  it("is the % of up checks", () => {
    expect(reliabilityPct([{ d: "1", s: "up" }, { d: "2", s: "down" }, { d: "3", s: "up" }])).toBe(66.7);
  });
  it("is 0 for empty", () => expect(reliabilityPct([])).toBe(0));
});
