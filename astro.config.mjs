// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your final domain once DNS is live.
export default defineConfig({
  site: 'https://rabinneupanee.com.np',
  integrations: [sitemap()],
  // Works as-is on Cloudflare Pages, Netlify, and Vercel.
  // For GitHub Pages on a custom domain, keep `base` unset (default '/').
});
