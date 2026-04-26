import type { CollectionConfig } from 'payload'

export const MapLayers: CollectionConfig = {
  slug: 'map-layers',
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
      name: 'layerType',
      type: 'select',
      options: [
        { label: 'Boundary', value: 'boundary' },
        { label: 'Roads', value: 'roads' },
        { label: 'Alert Raster', value: 'alert_raster' },
        { label: 'Risk Raster', value: 'risk_raster' },
        { label: 'Prediction Raster', value: 'prediction_raster' },
        { label: 'Warning Zone', value: 'warning_zone' },
        { label: 'Vector Overlay', value: 'vector_overlay' },
      ],
      required: true,
    },
    {
      name: 'studyArea',
      type: 'select',
      options: [
        { label: 'Gia Lai Province', value: 'gia_lai' },
        { label: 'K’Bang District', value: 'k_bang' },
        { label: 'Mang Yang District', value: 'mang_yang' },
        { label: 'All Pilot Areas', value: 'all' },
      ],
    },
    {
      name: 'sourceFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'Use this if the layer is hosted elsewhere (e.g. Mapbox tiles)',
      },
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'defaultVisible',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'defaultOpacity',
      type: 'number',
      defaultValue: 0.8,
      min: 0,
      max: 1,
    },
    {
      name: 'legendConfig',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'color', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 10,
    },
  ],
}
