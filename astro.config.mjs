import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/edge';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.goede.cl',
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    assets: true
  },
  adapter: vercel({
    imageService: true,
  })
});
