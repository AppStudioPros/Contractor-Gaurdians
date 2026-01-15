import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cardsSection',
  title: 'Cards Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', title: 'Alt Text', type: 'string' },
              ],
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (alternative to image)',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'navLink',
            },
            {
              name: 'badges',
              title: 'Badges',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
        ],
      },
      initialValue: 3,
    }),
    defineField({
      name: 'variant',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Bordered', value: 'bordered' },
          { title: 'Elevated', value: 'elevated' },
          { title: 'Image Top', value: 'image-top' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards',
    },
    prepare({ title, cards }) {
      return {
        title: title || 'Cards Section',
        subtitle: cards ? `${cards.length} cards` : 'No cards',
      };
    },
  },
});
