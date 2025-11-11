# Repository Guidelines

## Project Structure & Module Organization
- App Router lives in `app/` (pages, layouts). Edit `app/page.tsx` to change the homepage.
- Static assets in `public/` (served from `/`).
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- Fonts via `next/font`; Carbon Design System CSS imported in `app/layout.tsx`.
- Import alias: `@/*` maps to the repo root (see `tsconfig.json`). Example: `import x from '@/app/page';`.

## Build, Test, and Development Commands
- `pnpm dev` — Start Next.js dev server at `http://localhost:3000`.
- `pnpm build` — Type‑check and build production assets.
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
- Target Node 18.18+ or 20 LTS; use `pnpm@10` as pinned in `package.json`.

## Agent‑Specific Notes
- Keep patches minimal and focused; follow the above style.
- Respect the App Router structure; avoid creating `pages/`.
- When moving files, preserve import paths and the `@/` alias.
