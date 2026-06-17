---
name: choosing-an-api
description: Use when the user or agent needs to pick a public API for a task (weather, images, finance, etc.). Queries public-apis-live for reachable, deduped options.
---

# Choosing a Public API

When a task needs an external data source or service, query the `public-apis-live` MCP tools
before guessing a provider:

1. `list_categories` to see what's available.
2. `search_apis` with a `category` and/or `search` term; prefer `status: "up"` and `auth: "none"`
   for zero-setup options.
3. `get_api` for full details (URL, auth, HTTPS) before recommending one.

Always tell the user the auth requirement and that status reflects *reachability*, not functional testing.
