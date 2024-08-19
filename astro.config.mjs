import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output:'static',
  site:'https://walyvac.ca',
  integrations: [tailwind()],
  server: {
    port: 3000, // Set the port to 3000
  },
});