
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://corgiahn.github.io',
  base: '/nahnportfolio',
  integrations: [mdx(), tailwind()]
});
