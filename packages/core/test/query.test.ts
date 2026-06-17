import { describe, it, expect } from "vitest";
import { makeQuery } from "../src/query.js";
import type { ApiEntry } from "../src/types.js";

const data: ApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "cats", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up" },
  { id: "dog", name: "Dogs", description: "dog images", category: "Animals", url: "https://dog.ceo", auth: "apiKey", https: true, cors: "yes", sourceRepos: ["a/b"], status: "down" },
  { id: "books", name: "Open Library", description: "books", category: "Books", url: "https://openlibrary.org", auth: "none", https: true, cors: "unknown", sourceRepos: ["a/b"], status: "up" },
];
const q = makeQuery(data);

describe("query", () => {
  it("getApi by id", () => expect(q.getApi("dog")!.name).toBe("Dogs"));
  it("listCategories sorted unique", () => expect(q.listCategories()).toEqual(["Animals", "Books"]));
  it("filters by category + auth + status", () => {
    expect(q.findApis({ category: "Animals" })).toHaveLength(2);
    expect(q.findApis({ auth: "none" })).toHaveLength(2);
    expect(q.findApis({ status: "up" })).toHaveLength(2);
  });
  it("free-text search over name + description", () => {
    expect(q.findApis({ search: "dog" }).map((a) => a.id)).toEqual(["dog"]);
  });
});
