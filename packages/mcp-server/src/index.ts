#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { findApis, getApi, listCategories } from "public-apis-live";

const server = new McpServer({ name: "public-apis-live", version: "0.1.0" });

server.tool(
  "search_apis",
  "Find public APIs by category, auth type, reachability status, or free-text. Use when choosing an API for a task.",
  {
    category: z.string().optional(),
    auth: z.enum(["none", "apiKey", "OAuth", "token", "unknown"]).optional(),
    status: z.enum(["up", "down", "unknown"]).optional(),
    search: z.string().optional(),
  },
  async (args) => ({ content: [{ type: "text", text: JSON.stringify(findApis(args), null, 2) }] }),
);

server.tool(
  "get_api",
  "Get one API by its id.",
  { id: z.string() },
  async ({ id }) => ({ content: [{ type: "text", text: JSON.stringify(getApi(id), null, 2) }] }),
);

server.tool(
  "list_categories",
  "List all API categories.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(listCategories(), null, 2) }] }),
);

await server.connect(new StdioServerTransport());
