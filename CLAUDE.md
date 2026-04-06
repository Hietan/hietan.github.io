# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Type-check and build production assets
pnpm start        # Run the compiled app locally
pnpm lint         # ESLint (Next.js core-web-vitals)
pnpm lint -- --fix  # Auto-fix lint issues
```

No tests are currently configured. If adding tests, use Vitest + React Testing Library, colocated as `*.test.ts(x)`.

## Architecture

Personal academic profile website built with **Next.js 16 App Router**, **TypeScript (strict)**, and **pnpm**.

**Multilingual (EN/JA)**: `next-intl` handles i18n. Locale is detected from a cookie, falling back to the `Accept-Language` header. Translation strings live in `messages/en.json` and `messages/ja.json`. Server actions for locale switching are in `app/actions/locale.ts`.

**Styling**: Tailwind CSS v4 (utility classes in `className`) + IBM Carbon Design System (`@carbon/react` components, `@carbon/styles` CSS). Global overrides and CSS custom properties are in `app/globals.css`. Layout dimensions (header height, sidebar width, padding) are centralized in `app/lib/layout/constants.ts`.

**Data flow**: Content is stored as JSON under `app/data/research/json/`. TypeScript wrappers in `app/data/research/*.tsx` import the JSON and apply transformations (e.g., sorting by year/month in `papers.tsx`). Components then receive typed props. Type definitions are in `type/data.d.ts`.

**Import alias**: `@/*` maps to the repo root (e.g., `import x from '@/app/components/Foo'`).

## Key Directories

- `app/components/` — Reusable UI components; each has a companion `*.module.css`
- `app/data/` — Content data (JSON + TS wrappers) and profile configuration
- `app/lib/` — Shared utilities: `buildAuthors.tsx`, `cx.ts` (classname helper), `formatYearMonth.ts`, `tagConfig.ts`
- `messages/` — i18n translation files (`en.json`, `ja.json`)
- `type/` — Global TypeScript type declarations

## Conventions

- Components: PascalCase filenames; no `pages/` directory (App Router only)
- Commits: Conventional Commits style (`feat:`, `fix:`, `refactor:`, etc.)
- Keep patches minimal; `pnpm build` and `pnpm lint` must pass before committing
