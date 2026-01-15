import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'formSection',
  title: 'Form Section',
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
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Contact Form', value: 'contact' },
          { title: 'Contractor Signup', value: 'contractor' },
          { title: 'Affiliate Signup', value: 'affiliate' },
          { title: 'Newsletter', value: 'newsletter' },
          { title: 'Investor Inquiry', value: 'investor' },
          { title: 'Tradeschool Application', value: 'tradeschool' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for your submission! We will be in touch soon.',
    }),
    defineField({
      name: 'recipientEmail',
      title: 'Recipient Email',
      type: 'string',
      description: 'Override default recipient for this form',
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Standalone', value: 'standalone' },
          { title: 'With Image', value: 'with-image' },
          { title: 'Compact', value: 'compact' },
        ],
      },
      initialValue: 'standalone',
    }),
    defineField({
      name: 'image',
      title: 'Side Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.variant !== 'with-image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      formType: 'formType',
    },
    prepare({ title, formType }) {
      return {
        title: title || 'Form Section',
        subtitle: `Form: ${formType || 'Not set'}`,
      };
    },
  },
});
