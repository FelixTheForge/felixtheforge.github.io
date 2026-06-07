import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://felixtheforge.github.io',
  integrations: [sitemap(), pagefind()],
  vite: { plugins: [tailwindcss()] },
});
