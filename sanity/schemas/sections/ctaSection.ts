import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
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
      rows: 2,
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Button',
      type: 'navLink',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Button',
      type: 'navLink',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Image Background', value: 'image' },
          { title: 'Minimal', value: 'minimal' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'CTA Section',
        subtitle: 'Call to Action',
      };
    },
  },
});
