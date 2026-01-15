import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
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
      name: 'testimonials',
      title: 'Select Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      description: 'Leave empty to show all testimonials',
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Carousel', value: 'carousel' },
          { title: 'Grid', value: 'grid' },
          { title: 'Single Featured', value: 'featured' },
        ],
      },
      initialValue: 'carousel',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Testimonials Section',
        subtitle: 'Testimonials',
      };
    },
  },
});
