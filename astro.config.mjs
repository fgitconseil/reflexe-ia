import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://reflexe-ia.org',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
