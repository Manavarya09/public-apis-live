# Changelog

## Unreleased

- **Verified example call per API.** When an API's base URL serves a docs page instead of
  data, derive a parameter-less GET from its OpenAPI spec, call it, and store the real
  response (`sampleResponse`) plus the exact URL that produced it (`sampleEndpoint`).
  Surfaced in the MCP `get_api`/`get_endpoints` tools, the CLI `endpoints` command, and the
  website (📦). APIs that need a parameter or key stay `returnsData=false` — no false claims.
