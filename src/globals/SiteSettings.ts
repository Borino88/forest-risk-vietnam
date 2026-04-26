import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Forest Risk Vietnam',
    },
    {
      name: 'siteSubtitle',
      type: 'text',
      defaultValue: 'Interpretable AI for Deforestation Risk Prediction',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'footerText',
      type: 'textarea',
    },
    {
      name: 'contactEmail',
      type: 'text',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        { name: 'platform', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'featuredResult',
      type: 'relationship',
      relationTo: 'figures',
    },
    {
      name: 'featuredMap',
      type: 'relationship',
      relationTo: 'map-layers',
    },
  ],
}
