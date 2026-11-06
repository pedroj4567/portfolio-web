# Astro App

Pedro Acosta's portfolio. **Astro 7**, **Tailwind CSS v4**, and **pnpm**.

## Commands

| Command             | Action                                         |
| ------------------- | ---------------------------------------------- |
| `pnpm install`      | Installs dependencies                          |
| `pnpm dev`          | Dev server at `localhost:4321`                 |
| `pnpm build`        | Production build in `./dist/`                  |
| `pnpm preview`      | Previews the build                             |
| `pnpm check`        | Type checking (`astro check`)                  |
| `pnpm format`       | Formats with Prettier (sorts Tailwind classes) |
| `pnpm format:check` | Checks formatting (for CI)                     |

## Structure

```text
src/
├── content/projects.json   # ← PROJECTS: edited by hand (ES/EN in each field)
├── content.config.ts       # Zod schema: validates the JSON at build time
├── data/                   # Static data: stack.ts, career.ts (+ contact)
├── i18n/                   # ui.ts (ES/EN dictionaries, typed) + utils.ts (routes)
├── lib/
│   ├── projects.ts         # Queries to the collection (memoized, already translated)
│   └── scroll-fallback.ts  # Motion, only for browsers without animation-timeline
├── components/
│   ├── ui/                 # Win, SectionHeader, LangSwitch
│   ├── layout/             # Navbar (+ progress), MobileMenu, Footer
│   ├── hero/               # InfraIcon, StatusWindow
│   ├── projects/           # Card, Featured, Cover, Explorer (filter), Links
│   ├── sections/           # Hero, About, Stack, Career, Projects, Contact
│   └── seo/Seo.astro       # canonical, hreflang, OG, JSON-LD
├── views/                  # One page per type (Home, list, detail, 404)
├── pages/                  # Thin routes: /es/…, /en/…, 404, / (redirect)
└── styles/                 # global (tokens), components, animations
```

### Adding or editing a project

Edit `src/content/projects.json`. Required fields: `id` (slug), `order`, `cover`,
`categories`, `stack`, `title.{es,en}`, `summary.{es,en}`. Optional: `featured`,
`links.{code,demo}` (URL or `null`) and `caseStudy.{es,en}`. If something is invalid,
`pnpm build` fails with the exact field. The filter counters, the cards, and
the `/es/proyectos/<id>/` and `/en/projects/<id>/` pages are generated automatically.

### Performance and lazy loading

- **0 KB of JSON in the browser**: projects are read once per build and rendered to HTML.
- **Minimal JS (~1 KB per island)**: menu, filter, Status, and language.
- **Motion lazy-loaded**: `import()` only if the browser doesn't support `animation-timeline`
  (Safari/Firefox). Chrome/Edge never download it.
- **Status** only animates while it's visible and the tab is active.
- **Cards** with `content-visibility: auto`: they aren't painted until they get close to the viewport.
- **Self-hosted fonts** (Fontsource, Latin subset) + `preload` of the H1 font.
- **Prefetch** of internal links on hover.

### Design pending items (doc §11)

Email, Global Resource / SmartCompliance data, years, education, KYC stack,
project links, and OG images (`/og/es.png`, `/og/en.png`). They are marked as
`[PENDIENTE]` / `null` in `src/data/career.ts` and `src/content/projects.json`.

## Technical note

`@emnapi/runtime` and `@emnapi/core` are declared as devDependencies on purpose: without them, `@astrojs/check` resolves a 2.0 beta of `@emnapi/runtime` that breaks `pnpm check`. `typescript` is pinned to v6 because `astro check` doesn't support TS 7 yet.
