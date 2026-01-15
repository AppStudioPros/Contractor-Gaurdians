import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
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
      name: 'plans',
      title: 'Select Plans',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'pricingPlan' }],
        },
      ],
      description: 'Leave empty to show all pricing plans',
    }),
    defineField({
      name: 'showToggle',
      title: 'Show Monthly/Annual Toggle',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Pricing Section',
        subtitle: 'Pricing',
      };
    },
  },
});
