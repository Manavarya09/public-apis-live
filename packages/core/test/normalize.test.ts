import { describe, it, expect } from "vitest";
import { mergeAndDedupe, slugify } from "../src/normalize.js";
import type { RawEntry } from "../src/types.js";

const raw: RawEntry[] = [
  { name: "Cat Facts", url: "https://catfact.ninja/", description: "Cats", category: "Animals", auth: "none", https: true, cors: "unknown", sourceRepo: "a/one" },
  { name: "Cat Facts", url: "http://catfact.ninja", description: "Cat facts longer desc", category: "Animals", auth: "none", https: false, cors: "unknown", sourceRepo: "b/two" },
  { name: "Dogs", url: "https://dog.ceo", description: "Dogs", category: "Animals", auth: "apiKey", https: true, cors: "yes", sourceRepo: "a/one" },
];

describe("mergeAndDedupe", () => {
  const merged = mergeAndDedupe(raw);
  it("dedupes by normalized host+name", () => expect(merged).toHaveLength(2));
  it("combines provenance from both sources", () => {
    const cat = merged.find((m) => m.name === "Cat Facts")!;
    expect(cat.sourceRepos.sort()).toEqual(["a/one", "b/two"]);
  });
  it("prefers https and the longer description", () => {
    const cat = merged.find((m) => m.name === "Cat Facts")!;
    expect(cat.https).toBe(true);
    expect(cat.description).toBe("Cat facts longer desc");
  });
  it("slugifies ids", () => expect(slugify("Cat Facts!")).toBe("cat-facts"));
});
