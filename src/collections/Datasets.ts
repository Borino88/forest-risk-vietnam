import type { CollectionConfig } from 'payload'

export const Datasets: CollectionConfig = {
  slug: 'datasets',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'source',
      type: 'text',
    },
    {
      name: 'sourceUrl',
      type: 'text',
    },
    {
      name: 'citation',
      type: 'textarea',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'timeRange',
      type: 'text',
    },
    {
      name: 'resolution',
      type: 'text',
    },
    {
      name: 'pipelineRole',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'textarea',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'accessLevel',
      type: 'select',
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Researcher', value: 'researcher' },
        { label: 'Private', value: 'private' },
      ],
      defaultValue: 'public',
    },
  ],
}
