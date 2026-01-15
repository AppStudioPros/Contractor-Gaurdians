import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pitchDeckSlide',
  title: 'Pitch Deck Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Slide Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Slide Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Slide Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Slide Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      media: 'image',
    },
    prepare({ title, order, media }) {
      return {
        title: `${order}. ${title}`,
        media,
      };
    },
  },
});
