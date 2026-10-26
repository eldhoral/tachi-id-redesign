// Static assets are served before this Worker runs; it only sees paths with no matching file.
// Its one job: count WhatsApp clicks per unit and button in Workers Analytics Engine
// (no cookies, nothing personal: unit, button and page language only).
const UNITS = new Set(['group', 'logistics', 'ads', 'garage', 'foodworks']);
const PLACES = new Set(['nav', 'hero', 'services', 'units', 'chat', 'contact', 'footer', 'dock']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/wa') return env.ASSETS.fetch(request);

    if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    const origin = request.headers.get('Origin');
    const d = await request.json().catch(() => null);
    const valid = d && UNITS.has(d.unit) && PLACES.has(d.place) && (d.lang === 'id' || d.lang === 'en');
    // Only count beacons sent by our own pages.
    if (valid && (!origin || new URL(origin).host === url.host)) {
      env.CLICKS?.writeDataPoint({ blobs: [d.unit, d.place, d.lang], indexes: [d.unit] });
    }
    return new Response(null, { status: 204 });
  },
};
