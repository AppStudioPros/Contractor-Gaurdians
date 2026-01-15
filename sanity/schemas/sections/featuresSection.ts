import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'featuresSection',
  title: 'Features Section',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'feature' }],
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
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Cards', value: 'cards' },
          { title: 'Simple Grid', value: 'simple' },
          { title: 'Icon Left', value: 'icon-left' },
          { title: 'Centered Icons', value: 'centered' },
        ],
      },
      initialValue: 'cards',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      features: 'features',
    },
    prepare({ title, features }) {
      return {
        title: title || 'Features Section',
        subtitle: features ? `${features.length} features` : 'No features',
      };
    },
  },
});
