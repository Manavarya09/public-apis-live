import { adapters } from "./adapters/index.js";
import { mergeAndDedupe } from "./normalize.js";
import { verifyReachability, verifyFunctional, type ProbeResult } from "./verify.js";
import { fetchSpec } from "./endpoints.js";
import type { ApiEntry, RawEntry } from "./types.js";
import { sources as defaultSources, type Source } from "./sources.config.js";

export interface PipelineOpts {
  sources?: Source[];
  fetchFn?: (url: string) => Promise<string>;
  probeFn?: (url: string) => Promise<ProbeResult>;
  dataProbeFn?: (url: string) => Promise<{ code: number | null; body: string | null }>;
  specFetchFn?: (specUrl: string) => Promise<unknown>;
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
  await verifyFunctional(entries, 20, opts.dataProbeFn, opts.specFetchFn ?? fetchSpec);
  return { entries };
}
