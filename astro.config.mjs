import { defineConfig } from 'astro/config';

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://tomasgomezarroyo.github.io').replace(/\/+$/, '');

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
