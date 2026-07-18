import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomasgomezarroyo.pages.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
