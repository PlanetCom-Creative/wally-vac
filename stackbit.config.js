// stackbit.config.js
module.exports = {
    // You can define an empty contentSources array if you're not using a CMS.
    contentSources: [],
  
    // Define how static content maps to site pages
    pageMappings: [
      {
        contentType: 'page', // A general type for static pages
        pagePath: '/{slug}', // URL pattern for static pages
        template: 'src/pages/{slug}.astro', // Path to your Astro page template
      },
      {
        contentType: 'blogPost',
        pagePath: '/blog/{slug}', // URL pattern for blog posts
        template: 'src/pages/blog/[slug].astro', // Path to your Astro blog template
      },
      // Add more mappings as needed
    ],
  };
  