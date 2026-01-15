import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'showAppButtons',
      title: 'Show App Store Buttons',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Centered', value: 'centered' },
          { title: 'Left Aligned', value: 'left' },
          { title: 'Split (Image Right)', value: 'split-right' },
          { title: 'Split (Image Left)', value: 'split-left' },
        ],
      },
      initialValue: 'centered',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Section',
        subtitle: 'Hero',
        media,
      };
    },
  },
});
