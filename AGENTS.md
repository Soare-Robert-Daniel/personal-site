# AGENTS.md

## Build & Dev Commands
- **Install:** `bun install`
- **Dev server:** `bun run dev` (Astro dev server)
- **Build:** `bun run build` (static site output in `dist/`)
- **Preview:** `bun run preview`
- **Deploy:** `sudo ./deploy.sh`
- This site runs on a VPS with Caddy as the web server. To preview changes, you must build and deploy (`sudo ./deploy.sh`); there is no local preview available.
- No test framework is configured.

## Architecture
Astro 5 static blog (site: robertsoare.xyz) using MDX and sitemap integrations. Uses `bun` as package manager.
- `src/pages/` — Routes: index, about, blog list/detail, rss.xml
- `src/content/blog/` — Blog posts as `.md`/`.mdx` files with frontmatter (title, description, pubDate, heroImage?)
- `src/content.config.ts` — Content collection schema (Zod validation)
- `src/components/` — Astro components (PascalCase, e.g. `BaseHead.astro`, `HeaderLink.astro`)
- `src/layouts/BlogPost.astro` — Blog post layout wrapper
- `src/styles/global.css` — Global styles with CSS custom properties (dark theme)
- `src/consts.ts` — Site-wide constants (SITE_TITLE, SITE_DESCRIPTION)

## Code Style
- TypeScript with `strict` + `strictNullChecks`; Astro component frontmatter in `---` fences
- Imports use relative paths (`../consts`, `./HeaderLink.astro`)
- Components are PascalCase `.astro` files; constants are UPPER_SNAKE_CASE
- Tabs for indentation; scoped `<style>` blocks in components
- Images processed via `sharp`; use Astro `image()` schema for optimized images
