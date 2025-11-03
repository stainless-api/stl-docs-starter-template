## Getting started

Stainless Docs are built on top of Astro and Starlight. Starlight is a powerful prose documentation framework designed for speed, accessibility, and customizability.

This project is a standard Starlight project with the `stl-starlight` plugin pre-configured.

When you run `astro dev` or `astro build`, your API/SDK reference docs are automatically regenerated with the latest information about your project.

To facilitate this, you'll need to provide the `STAINLESS_API_KEY` environment variable. You can create a Stainless API key from the [Settings page](http://app.stainless.com/org/default/settings) in the Stainless Dashboard.

You can store this key in a `.env` file in the repository's root. That file is already git ignored for you.

### Tl;dr

1. Create a Stainless API key in the [Stainless Dashboard](http://app.stainless.com/org/default/settings)
2. Paste that key in `.env`. Your file should look like `STAINLESS_API_KEY="stl_sk_xxx"`
3. Run `pnpm install` to install dependencies
4. Run `pnpm astro dev` to preview your docs site
5. Commit + push to the main branch to deploy your site. Note: your site is automatically redeployed whenever your API changes.

## ✨ Starlight Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
