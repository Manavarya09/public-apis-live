import { adapters } from "./adapters/index.js";
import { mergeAndDedupe } from "./normalize.js";
import { verifyReachability } from "./verify.js";
import type { ApiEntry, RawEntry } from "./types.js";
import { sources as defaultSources, type Source } from "./sources.config.js";

export interface PipelineOpts {
  sources?: Source[];
  fetchFn?: (url: string) => Promise<string>;
  probeFn?: (url: string) => Promise<number | null>;
}

export async function runPipeline(opts: PipelineOpts = {}): Promise<{ entries: ApiEntry[] }> {
  const srcs = opts.sources ?? defaultSources;
  const fetchFn = opts.fetchFn ?? (await import("./fetch.js")).fetchSource;
  const raws: RawEntry[] = [];
  for (const s of srcs) {
    try {
      const content = await fetchFn(s.rawUrl);
      raws.push(...adapters[s.adapter](content, s.repo));
    } catch (err) {
      console.error(`source ${s.repo} failed:`, (err as Error).message);
    }
  }
  const entries = mergeAndDedupe(raws);
  await verifyReachability(entries, 20, opts.probeFn);
  return { entries };
}
