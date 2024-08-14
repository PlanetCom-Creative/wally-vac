import { defineStackbitConfig, getLocalizedFieldForLocale, SiteMapEntry } from '@stackbit/types';
import { LocalContentSource } from '@stackbit/cms-local'; // Example for local content

export default defineStackbitConfig({
  ssgName:'custom',
  stackbitVersion: '~0.6.0',
  contentSources: [
    new LocalContentSource({
      // Configuration for local content source
      contentPath: './content', // Path to your local content directory
    }),
  ],
  modelExtensions: [
    { name: 'page', type: 'page', urlPath: '/{slug}' },
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models
      .filter((m) => m.type === 'page')
      .map((m) => m.name);
    return documents
      .filter((d) => pageModels.includes(d.modelName))
      .map((document) => {
        const slug = getLocalizedFieldForLocale(document.fields.slug);
        if (!slug.value) return null;
        const urlPath = '/' + slug.value.replace(/^\/+/, '');
        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage: urlPath === '/',
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  },
});
