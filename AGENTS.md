# Repository Guidelines

## Project Structure & Module Organization
- App Router lives in `app/` (pages, layouts). The research homepage is `app/(researcher)/[locale]/page.tsx`; `/` redirects to the preferred locale.
- Additional pages live in `app/programming/` and `app/music/`.
- Static assets in `public/` (served from `/`).
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- Carbon Design System CSS is imported in `app/layout.tsx`; the programming page uses Joy UI through its own provider.
- Import alias: `@/*` maps to the repo root (see `tsconfig.json`). Example: `import x from '@/app/page';`.

## Content & Internationalization
- `next-intl` supports English and Japanese; translations live in `messages/en.json` and `messages/ja.json`.
- `proxy.ts` redirects `/` using the locale cookie or `Accept-Language` and passes the path locale to `i18n/request.ts`. Locale switching uses `app/actions/locale.ts`.
- Research content lives in `app/data/json/research/`; wrappers in `app/data/research/` sort or prepare it for components. Types live in `type/data.d.ts`.
- Shared profile and citation helpers live in `app/lib/`. Layout dimensions are in `app/lib/layout/constants.ts`.

## Build, Test, and Development Commands
- `pnpm dev` — Start Next.js dev server at `http://localhost:3000`.
- `pnpm build` — Check machine-readable content, type-check, and build production assets.
- `pnpm check:machine-readable` — Check generated files in `public/` are in sync.
- `pnpm generate:machine-readable` — Regenerate those files after content changes; review and commit the output.
- `pnpm start` — Run the compiled app locally.
- `pnpm lint` — Lint with ESLint (Next core‑web‑vitals). Use `pnpm lint -- --fix` to auto‑fix.

## Coding Style & Naming Conventions
- Language: TypeScript (strict, no emit). Prefer explicit types at public boundaries.
- Indentation: 2 spaces; keep lines short and readable.
- React components and files: PascalCase for components, `page.tsx`/`layout.tsx` per App Router.
- Styling: Tailwind CSS v4 utilities in `className`; Carbon components from `@carbon/react`.
- Imports: use `@/` alias for absolute paths; group and sort sensibly.

## Testing Guidelines
- No tests currently. If adding tests, prefer React Testing Library + Vitest.
- Naming: colocate as `*.test.ts(x)` alongside the source or under `tests/`.
- Aim for meaningful coverage on new logic; mock network and timers when applicable.
- Run tests in CI or locally before submitting PRs (add scripts as needed).

## Commit & Pull Request Guidelines
- Commit style: Conventional Commits (e.g., `feat: …`, `fix: …`, `chore: …`). Keep messages scoped and imperative.
- PRs must include: concise description, rationale, screenshots for UI changes, and linked issues (e.g., `Closes #123`).
- Ensure `pnpm build` and `pnpm lint` pass locally. Avoid unrelated refactors.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` for local overrides (Next.js loads it automatically) and keep it git‑ignored.
- Next.js 16 requires Node 20.9+; Node 24.19.0 was validated in the cloud environment. Use `pnpm@10.13.1` as pinned in `package.json` (via Corepack where available).

## Agent‑Specific Notes
- Keep patches minimal and focused; follow the above style.
- Respect the App Router structure; avoid creating `pages/`.
- When moving files, preserve import paths and the `@/` alias.
