import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'headerLinks',
      title: 'Header Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      description: 'Main navigation links in the header',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Header CTA Button',
      type: 'navLink',
      description: 'Call-to-action button in the header',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Columns',
      type: 'array',
      of: [{ type: 'footerColumn' }],
      description: 'Footer navigation organized in columns',
    }),
    defineField({
      name: 'footerCta',
      title: 'Footer CTA',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        { name: 'button', title: 'Button', type: 'navLink' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'Header and Footer Links',
      };
    },
  },
});
