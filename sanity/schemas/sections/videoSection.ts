import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'videoSection',
  title: 'Video Section',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Override the default video thumbnail',
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay (muted)',
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
          { title: 'Full Width', value: 'full' },
          { title: 'With Text Left', value: 'text-left' },
          { title: 'With Text Right', value: 'text-right' },
        ],
      },
      initialValue: 'centered',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Video Section',
        subtitle: 'Video',
        media,
      };
    },
  },
});
