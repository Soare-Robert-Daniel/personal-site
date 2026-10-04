# Astro Starter Kit: Blog

```sh
bun create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Docker / Coolify

The Docker image uses Bun to build the static site, then serves only `dist/`
with Caddy Alpine. No Bun, Node.js, or project dependencies are included in
the runtime image.

In Coolify, create an application from this repository and configure:

- Build pack: **Dockerfile**
- Base directory: `/`
- Dockerfile location: `/Dockerfile`
- Ports exposes: `8080`
- Domain: `https://robertsoare.xyz`
- Health check (if enabled in Coolify): HTTP, port `8080`, path `/`

Coolify handles HTTPS through its reverse proxy; the container serves HTTP.
No volumes, environment variables, or custom start commands are needed.
The build needs internet access to install dependencies and download fonts.
If you change the production domain, also update `site` in `astro.config.mjs`
so canonical URLs, RSS, and the sitemap use the correct hostname.
The existing `deploy.sh` is only for the previous direct VPS deployment;
Coolify builds and deploys the Dockerfile instead.

To build and run the same image with Docker:

```sh
docker build -t personal-site .
docker run --rm -p 8080:8080 personal-site
```

The site will be available at `http://localhost:8080`.
