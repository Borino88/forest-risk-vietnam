import type { CollectionConfig } from 'payload'

export const Figures: CollectionConfig = {
  slug: 'figures',
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
      name: 'figureNumber',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'ROC Curve', value: 'roc' },
        { label: 'Feature Importance', value: 'feature_importance' },
        { label: 'Spatial Risk Map', value: 'spatial_map' },
        { label: 'Coefficient Plot', value: 'coefficient' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'district',
      type: 'select',
      options: [
        { label: 'K’Bang', value: 'k_bang' },
        { label: 'Mang Yang', value: 'mang_yang' },
        { label: 'Gia Lai', value: 'gia_lai' },
        { label: 'Comparison', value: 'comparison' },
      ],
    },
    {
      name: 'showOnPublicSite',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
