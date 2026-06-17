import { parseMarkdownTable } from "./markdownTable.js";
import type { RawEntry } from "../types.js";

export type Adapter = (content: string, repo: string) => RawEntry[];
export const adapters: Record<string, Adapter> = { markdownTable: parseMarkdownTable };
