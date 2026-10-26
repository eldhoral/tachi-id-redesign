import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tachi.id',
  // One page with a small stylesheet: inlining saves a render-blocking request.
  build: { inlineStylesheets: 'always' },
});
