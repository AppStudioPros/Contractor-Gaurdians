import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stepsSection',
  title: 'Steps Section',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'step' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Timeline', value: 'timeline' },
        ],
      },
      initialValue: 'horizontal',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      steps: 'steps',
    },
    prepare({ title, steps }) {
      return {
        title: title || 'Steps Section',
        subtitle: steps ? `${steps.length} steps` : 'No steps',
      };
    },
  },
});
