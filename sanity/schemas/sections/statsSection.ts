import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
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
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "2,000+", "$5M", "99%"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Projects Completed", "Revenue", "Satisfaction"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (optional)',
            },
          ],
          preview: {
            select: {
              value: 'value',
              label: 'label',
            },
            prepare({ value, label }) {
              return {
                title: value,
                subtitle: label,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Cards', value: 'cards' },
          { title: 'Inline', value: 'inline' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      stats: 'stats',
    },
    prepare({ title, stats }) {
      return {
        title: title || 'Stats Section',
        subtitle: stats ? `${stats.length} statistics` : 'Statistics',
      };
    },
  },
});
