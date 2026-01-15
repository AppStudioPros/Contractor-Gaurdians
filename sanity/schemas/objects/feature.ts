import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "Shield", "Home", "Users")',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional image instead of icon',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'navLink',
      description: 'Optional link for this feature',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});
