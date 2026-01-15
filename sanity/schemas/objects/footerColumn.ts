import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare({ title, links }) {
      return {
        title,
        subtitle: links ? `${links.length} links` : 'No links',
      };
    },
  },
});
