
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://neupanerabin.github.io',
  base: '/personal-site',
  integrations: [sitemap()],
});
