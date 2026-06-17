# public-apis-live Website — Design Spec (addendum)

**Date:** 2026-06-17
**Parent spec:** `2026-06-17-public-apis-live-design.md`

## Goal

A minimal website that lets anyone search/filter the auto-verified public-API dataset in the browser.
Serves as the live demo people link to (launch asset) and the "search the working APIs" UI the README
can't provide.

## Stack & hosting (decided)

- **Next.js (App Router) with static export** (`output: 'export'`) — GitHub Pages serves static files
  only, so all filtering is client-side. No SSR at runtime.
- **GitHub Pages**, project site at `https://manavarya09.github.io/public-apis-live/`.
- Auto-deployed by a GitHub Actions workflow on every push to `main` (so the daily refresh self-updates
  the site).

## Data flow (single source of truth)

The deploy workflow copies the existing `data/apis.json` → `packages/web/public/apis.json` immediately
before `next build`. The page `fetch`es `apis.json` at runtime in the browser. No second maintained
copy; `packages/web/public/apis.json` is git-ignored and generated. A `prebuild`/`predev` script does
the same copy locally.

## The page (one screen)

- Header: title, live stat line (`N APIs · M reachable · verified <date>`), and the reachability honesty
  note.
- Controls (all client-side, instant): free-text search, category `<select>`, auth `<select>`,
  status `<select>`.
- Results: table — name (external link), description, category, auth, HTTPS, status emoji.
- No routing, no detail pages, no database. Dark, minimal, fast.

## Components / files

```
packages/web/
├─ package.json            # next, react, react-dom; scripts incl. predev/prebuild copy
├─ next.config.mjs         # output: 'export', basePath, NEXT_PUBLIC_BASE_PATH, images.unoptimized
├─ tsconfig.json
├─ app/
│  ├─ layout.tsx           # root layout, minimal global CSS
│  ├─ page.tsx             # 'use client' — fetch + state + render
│  └─ globals.css
├─ lib/filter.ts           # pure filterApis(entries, criteria) — unit tested
├─ test/filter.test.ts     # vitest (runs in the existing root suite)
└─ public/                 # apis.json copied here at build (git-ignored)
```

## Testing

- `lib/filter.ts` is a pure function with a vitest unit test (search + category + auth + status),
  mirroring the core query layer's test style.
- UI verified by a successful `next build` (static export) + a local render/filter check.

## Build & deploy

- `next build` → static export to `packages/web/out/`.
- `.github/workflows/deploy-pages.yml`: checkout → pnpm install → copy `data/apis.json` into web public
  → `next build` → upload `out/` artifact → deploy to Pages. Triggers: push to `main`,
  `workflow_dispatch`.
- Enable Pages with source = GitHub Actions via the `gh` API.

## Out of scope (v1 site)

- Per-API detail pages, favorites, copy-to-clipboard snippets, analytics, custom domain.
