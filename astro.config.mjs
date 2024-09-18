import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://wallyvac.ca',
  integrations: [
    tailwind(), 
    robotsTxt()],
  server: {
    port: 3000 // Set the port to 3000
  }
});