# tachi.id

Landing page for PT Tantra Hachi Group. Astro static site, deployed to Cloudflare.

Requires Node 22.23.4 or newer (`nvm use` reads `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run deploy    # build, then wrangler deploy (needs a Cloudflare login)
npx wrangler dev  # after a build: the real Worker, redirects and /api/wa on :8787
```

Copy for both languages lives in `src/i18n.ts`. Indonesian is served at `/`, English at `/en/`.
The video band is rendered from `video/` (a separate Remotion project, see its `package.json`).

## Cloudflare

Git integration (Workers Builds): build command `npm run build`, deploy command `npx wrangler deploy`,
environment variable `NODE_VERSION=22.23.4`.

- `wrangler.jsonc` serves `dist/` as static assets, with `404.html` for unknown paths.
- `worker.js` only handles `POST /api/wa`, which counts WhatsApp clicks in the Analytics Engine
  dataset `tachi_whatsapp_clicks` (unit, button, language; no cookies or personal data).
- `public/_redirects` maps the old WordPress URLs to sections of the new page.
- `public/_headers` sets security headers and caching.
- Build variable `PUBLIC_CF_ANALYTICS_TOKEN` switches on Cloudflare Web Analytics (cookieless).
  Get the token from Analytics & Logs → Web Analytics → Add a site → manual JS snippet.

### WhatsApp clicks per unit

Create an API token with "Account Analytics: Read", then:

```sh
curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/analytics_engine/sql" \
  -H "Authorization: Bearer $API_TOKEN" \
  -d "SELECT blob1 AS unit, blob2 AS button, SUM(_sample_interval) AS clicks
      FROM tachi_whatsapp_clicks
      WHERE timestamp > NOW() - INTERVAL '30' DAY
      GROUP BY unit, button ORDER BY clicks DESC"
```

## Going live on tachi.id

Today tachi.id's DNS is at webhostingindonesia (ns1–ns4.webhostingindonesia.co.id), and **email
runs on the same server as the old WordPress site**: `MX 0 tachi.id`, with `tachi.id` at
103.131.51.86. Pointing `tachi.id` at Cloudflare without the mail step below breaks email to
tantrahachigroup@tachi.id. Do the steps in this order.

1. **Add the zone.** Cloudflare dashboard → Add a domain → `tachi.id` (Free plan). Check that the
   import picked up every record from the current DNS, especially MX, the SPF TXT record, and any
   `mail`, `webmail`, `cpanel` or `ftp` records. Set all of those to **DNS only** (grey cloud).
2. **Move mail off the bare domain.** Add `A mail 103.131.51.86` (DNS only), then change the MX
   record to `MX 0 mail.tachi.id`. Keep the SPF record as it is; it already lists 103.131.51.86.
   Ask the hosting provider whether DKIM or autodiscover records exist, and copy them too.
3. **Switch nameservers.** At the registrar, replace the four webhostingindonesia nameservers with
   the two Cloudflare gives you. Wait until the zone shows **Active**.
4. **Point the site at the Worker.** Delete the old `A tachi.id 103.131.51.86` and `www` records.
   Then go to Workers & Pages → `tachi-id` → Settings → Domains & Routes → Add → Custom domain:
   add `tachi.id` and `www.tachi.id`.
5. **Redirect www to the bare domain.** Rules → Redirect Rules → create rule: hostname equals
   `www.tachi.id`, then dynamic redirect to `concat("https://tachi.id", http.request.uri.path)`,
   status 301, preserve query string.
6. **Check.** Send an email to and from tantrahachigroup@tachi.id. Open `https://tachi.id/kontak/`
   (should land on the contact section) and `https://www.tachi.id/` (should land on
   `https://tachi.id/`). In Google Search Console, submit `https://tachi.id/sitemap.xml`.
7. **Analytics.** Add tachi.id under Web Analytics, put the token in the `PUBLIC_CF_ANALYTICS_TOKEN`
   build variable, and redeploy.

Keep the old hosting account until email has run from `mail.tachi.id` for a few days.
