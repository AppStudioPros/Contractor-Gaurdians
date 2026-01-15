import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., "01", "Step 1", etc.',
    }),
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
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "Search", "FileText", "CheckCircle")',
    }),
  ],
  preview: {
    select: {
      number: 'number',
      title: 'title',
    },
    prepare({ number, title }) {
      return {
        title: number ? `${number}. ${title}` : title,
      };
    },
  },
});
