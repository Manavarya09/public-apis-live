#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { findApis, getApi, listCategories, fetchEndpoints } from "public-apis-live";

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

server.tool(
  "get_endpoints",
  "Get an API's actual endpoints (HTTP method + path) by id, fetched live from its OpenAPI spec. Use this after get_api to learn exactly how to call it.",
  { id: z.string() },
  async ({ id }) => {
    const api = getApi(id);
    if (!api) return { content: [{ type: "text", text: `No API with id "${id}".` }] };
    if (!api.specUrl)
      return { content: [{ type: "text", text: `${api.name} has no OpenAPI spec on file. Base URL: ${api.url}` }] };
    const endpoints = await fetchEndpoints(api.specUrl);
    return {
      content: [
        { type: "text", text: JSON.stringify({ api: api.name, specUrl: api.specUrl, endpoints: endpoints.slice(0, 200) }, null, 2) },
      ],
    };
  },
);

await server.connect(new StdioServerTransport());
