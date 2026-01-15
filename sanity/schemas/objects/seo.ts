import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Override the page title for SEO (50-60 characters ideal)',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (150-160 characters ideal)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Social Title',
      type: 'string',
      description: 'Title for social media sharing (falls back to meta title)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Social Description',
      type: 'text',
      rows: 2,
      description: 'Description for social media sharing',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Image',
      type: 'image',
      description: 'Image for social media sharing (1200x630px recommended)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the canonical URL if this content exists elsewhere',
    }),
    defineField({
      name: 'noindex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Prevent this page from being indexed',
      initialValue: false,
    }),
    defineField({
      name: 'nofollow',
      title: 'No Follow Links',
      type: 'boolean',
      description: 'Tell search engines not to follow links on this page',
      initialValue: false,
    }),
  ],
});
