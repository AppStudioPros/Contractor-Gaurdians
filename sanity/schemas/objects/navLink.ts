import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      description: 'Internal path (e.g., /about) or external URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isButton',
      title: 'Display as Button',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
});
