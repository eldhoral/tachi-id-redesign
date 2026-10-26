# tachi.id

Landing page for PT Tantra Hachi Group. Astro static site, deployed to Cloudflare.

Requires Node 22.23.4 or newer (`nvm use` reads `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run deploy    # build, then wrangler deploy (needs a Cloudflare login)
```

Copy for both languages lives in `src/i18n.ts`. Indonesian is served at `/`, English at `/en/`.

## Cloudflare

Git integration (Workers Builds): build command `npm run build`, deploy command `npx wrangler deploy`,
environment variable `NODE_VERSION=22.23.4`. `wrangler.jsonc` serves `dist/` as static assets with
`404.html` for unknown paths; `public/_headers` sets security headers and long caching for `/_astro/*`.
