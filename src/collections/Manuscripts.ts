import type { CollectionConfig } from 'payload'

export const Manuscripts: CollectionConfig = {
  slug: 'manuscripts',
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
      name: 'abstract',
      type: 'textarea',
    },
    {
      name: 'authors',
      type: 'text',
    },
    {
      name: 'journalTarget',
      type: 'text',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Under Review', value: 'under_review' },
        { label: 'Submitted', value: 'submitted' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
    {
      name: 'version',
      type: 'text',
    },
    {
      name: 'manuscriptFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'supplementaryFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'citation',
      type: 'textarea',
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
