import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      title: 'Source Path',
      type: 'string',
      description: 'The old URL path (e.g., /old-page)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Destination Path',
      type: 'string',
      description: 'The new URL path (e.g., /new-page)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'permanent',
      title: 'Permanent Redirect (301)',
      type: 'boolean',
      description: 'Use 301 (permanent) or 302 (temporary) redirect',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      source: 'source',
      destination: 'destination',
      permanent: 'permanent',
    },
    prepare({ source, destination, permanent }) {
      return {
        title: `${source} → ${destination}`,
        subtitle: permanent ? '301 (Permanent)' : '302 (Temporary)',
      };
    },
  },
});
