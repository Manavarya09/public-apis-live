# public-apis-live

Every public API in one place — aggregated from the top public-API lists, deduped, and
auto-checked for reachability. **Refreshed daily.** The dataset ships bundled with the package,
so queries are instant and work offline.

> Status reflects **reachability** (the server responded), not functional testing. No API keys are used.

## Install

```bash
npm i public-apis-live
```

## Usage

```ts
import { findApis, getApi, listCategories, apis } from "public-apis-live";

listCategories();                         // ["Animals", "Books", "Weather", ...]

findApis({ category: "Weather", auth: "none", status: "up" });
findApis({ search: "currency" });

getApi("cat-facts");                      // single entry by id

apis.length;                              // the full bundled dataset
```

### `findApis(filter)`

| field      | type                                                    | meaning                          |
|------------|---------------------------------------------------------|----------------------------------|
| `category` | `string`                                                | exact category match             |
| `auth`     | `"none" \| "apiKey" \| "OAuth" \| "token" \| "unknown"` | required auth                    |
| `status`   | `"up" \| "down" \| "unknown"`                           | last reachability result         |
| `search`   | `string`                                                | substring of name + description  |

Each entry: `{ id, name, description, category, url, auth, https, cors, sourceRepos, status, httpCode, responseMs, lastChecked }`.

## Links

- 🔎 Live search: https://manavarya09.github.io/public-apis-live/
- Source & daily-refresh CI: https://github.com/Manavarya09/public-apis-live

MIT
