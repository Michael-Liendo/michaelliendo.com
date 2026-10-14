# michaelliendo.com

Personal portfolio and notes of Michael Liendo. Built with SvelteKit 2, Svelte 5, Tailwind CSS v4, mdsvex (notes in `src/mdsvex`) and typesafe-i18n (Spanish at `/`, English at `/en`).

## Develop

Requires the Node version in `.nvmrc`.

```bash
npm install
npm run dev
```

## Check and build

```bash
npm run lint    # Biome
npm run check   # svelte-check
npm run build   # Cloudflare build (pages are prerendered)
```

After editing translations in `src/i18n/{es,en}`, regenerate the types with `npx typesafe-i18n --no-watch`.

## Deploy

Cloudflare builds and deploys automatically from `main` through the dashboard Git integration. Security and cache headers live in `_headers` (the Cloudflare adapter copies it into the build).
