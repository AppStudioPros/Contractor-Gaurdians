import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Monthly Price',
      type: 'number',
      description: 'Set to 0 for free plans',
    }),
    defineField({
      name: 'billingPeriod',
      title: 'Billing Period',
      type: 'string',
      options: {
        list: [
          { title: 'Monthly', value: 'month' },
          { title: 'Yearly', value: 'year' },
          { title: 'Free', value: 'free' },
          { title: 'One-time', value: 'one-time' },
        ],
      },
    }),
    defineField({
      name: 'annualPrice',
      title: 'Annual Price',
      type: 'number',
      description: 'Total annual price (if different from monthly x 12)',
    }),
    defineField({
      name: 'annualSavings',
      title: 'Annual Savings Text',
      type: 'string',
      description: 'e.g., "Save 20%"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Mark as Popular',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      isPopular: 'isPopular',
    },
    prepare({ title, price, isPopular }) {
      return {
        title: `${title}${isPopular ? ' ⭐' : ''}`,
        subtitle: price ? `$${price}/mo` : 'Free',
      };
    },
  },
});
