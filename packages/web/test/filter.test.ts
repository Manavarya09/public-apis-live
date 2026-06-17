import { describe, it, expect } from "vitest";
import { filterApis, type WebApiEntry } from "../lib/filter.js";

const data: WebApiEntry[] = [
  { id: "cat", name: "Cat Facts", description: "cats", category: "Animals", url: "https://catfact.ninja", auth: "none", https: true, status: "up" },
  { id: "dog", name: "Dogs", description: "dog images", category: "Animals", url: "https://dog.ceo", auth: "apiKey", https: true, status: "down" },
  { id: "books", name: "Open Library", description: "books", category: "Books", url: "https://openlibrary.org", auth: "none", https: true, status: "up" },
];

describe("filterApis", () => {
  it("returns all with empty criteria", () => expect(filterApis(data, {})).toHaveLength(3));
  it("filters by category", () => expect(filterApis(data, { category: "Animals" })).toHaveLength(2));
  it("filters by auth", () => expect(filterApis(data, { auth: "none" })).toHaveLength(2));
  it("filters by status", () => expect(filterApis(data, { status: "up" })).toHaveLength(2));
  it("fuzzy search ranks the match first", () =>
    expect(filterApis(data, { search: "dog" })[0].id).toBe("dog"));
  it("fuzzy search tolerates typos", () =>
    expect(filterApis(data, { search: "catt" })[0].id).toBe("cat"));
  it("combines criteria", () =>
    expect(filterApis(data, { category: "Animals", status: "up" }).map((a) => a.id)).toEqual(["cat"]));
});
