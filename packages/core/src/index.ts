import { makeQuery } from "./query.js";
import data from "../apis.json" with { type: "json" };
import type { ApiEntry } from "./types.js";

export const apis = data as ApiEntry[];
const q = makeQuery(apis);
export const findApis = q.findApis;
export const getApi = q.getApi;
export const listCategories = q.listCategories;

export * from "./types.js";
export { runPipeline } from "./pipeline.js";
export { makeQuery } from "./query.js";
export { fuzzySearch, FUSE_OPTIONS } from "./search.js";
export { computeBenchmark } from "./benchmark.js";
export type { Benchmark, Stat } from "./benchmark.js";
