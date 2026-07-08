import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://the-b-context.com',
  base: '/',
  output: 'static',
  // Trailing slash cohérent : évite les doublons d'URL et les chaînes de redirection côté moteurs
  trailingSlash: 'always',
  // Page Mainteneurs retirée du site public (ADR-006) : redirection vers À propos
  redirects: {
    '/mainteneurs/': '/a-propos/',
  },
  integrations: [
    sitemap({
      // Exclut la redirection Mainteneurs du sitemap (ne pas indexer une page qui redirige)
      filter: (page) => !page.includes('/mainteneurs'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
