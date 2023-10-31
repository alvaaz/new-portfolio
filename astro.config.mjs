import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.goede.cl',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel({
    imageService: true,
  })
});
