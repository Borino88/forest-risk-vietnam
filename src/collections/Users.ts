import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'viewer',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Researcher', value: 'researcher' },
        { label: 'Viewer', value: 'viewer' },
      ],
      required: true,
    },
    {
      name: 'affiliation',
      type: 'text',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
  ],
}
