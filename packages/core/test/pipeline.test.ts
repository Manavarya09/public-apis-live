import { describe, it, expect } from "vitest";
import { runPipeline } from "../src/pipeline.js";

describe("runPipeline", () => {
  it("fetches, parses, dedupes, verifies via injected deps", async () => {
    const md =
      "### Animals\n\n| API | Description | Auth | HTTPS | CORS |\n|---|---|---|---|---|\n| [Cat Facts](https://catfact.ninja) | Cats | No | Yes | No |\n";
    const result = await runPipeline({
      sources: [{ repo: "a/b", rawUrl: "x", adapter: "markdownTable" }],
      fetchFn: async () => md,
      probeFn: async () => 200,
      dataProbeFn: async () => ({ code: 200, body: '{"fact":"cats"}' }),
    });
    expect(result.entries).toHaveLength(1);
    expect(result.entries[0].status).toBe("up");
    expect(result.entries[0].sourceRepos).toEqual(["a/b"]);
    expect(result.entries[0].returnsData).toBe(true);
  });
});
