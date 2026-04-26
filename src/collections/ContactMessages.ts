import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  admin: {
    useAsTitle: 'senderName',
    defaultColumns: ['senderName', 'senderEmail', 'inquiryType', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'senderName',
      type: 'text',
      required: true,
    },
    {
      name: 'senderEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
    },
    {
      name: 'inquiryType',
      type: 'select',
      options: [
        { label: 'Collaboration', value: 'collaboration' },
        { label: 'Research Question', value: 'research' },
        { label: 'Dataset Access', value: 'dataset' },
        { label: 'Website Issue', value: 'issue' },
        { label: 'General', value: 'general' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'new',
    },
  ],
}
