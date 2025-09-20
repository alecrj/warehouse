import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Changed back to hybrid to enable Netlify functions
  adapter: netlify(),
  site: 'https://warehouse-locating.netlify.app',
});