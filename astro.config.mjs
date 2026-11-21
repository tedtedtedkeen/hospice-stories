// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages: сайт живёт по адресу https://tedtedtedkeen.github.io/hospice-stories/
  // Если подключите свой домен — поменяйте site на него и уберите base.
  site: 'https://tedtedtedkeen.github.io',
  base: '/hospice-stories',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
