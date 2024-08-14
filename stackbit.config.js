import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  ssgName: 'astro',
  stackbitVersion: "~0.6.0",
    nodeVersion: '16',
    contentSources: [ /* ... */ ]
    modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
});

