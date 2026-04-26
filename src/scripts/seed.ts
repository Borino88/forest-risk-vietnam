import { getPayload } from 'payload'
import config from '../payload.config'

const seed = async () => {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Create Admin User
  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@forestrisk.vn',
      password: 'password123',
      name: 'Admin Researcher',
      role: 'admin',
      affiliation: 'Forest Risk Vietnam Group',
    },
  })

  // Create Datasets
  const datasets = [
    {
      title: 'Hansen Global Forest Change',
      source: 'UMD / GEE',
      resolution: '30m',
      isPublic: true,
      accessLevel: 'public',
    },
    {
      title: 'GFW Integrated Alerts',
      source: 'Global Forest Watch',
      resolution: 'Daily',
      isPublic: true,
      accessLevel: 'public',
    },
    {
      title: 'Sentinel-2 Multispectral',
      source: 'ESA',
      resolution: '10m',
      isPublic: true,
      accessLevel: 'public',
    }
  ]

  for (const d of datasets) {
    await payload.create({
      collection: 'datasets',
      data: d,
    })
  }

  // Create Map Layers
  const layers = [
    {
      title: 'K’Bang Boundary',
      layerType: 'boundary',
      studyArea: 'k_bang',
      isPublic: true,
      defaultVisible: true,
      sortOrder: 1,
    },
    {
      title: 'Mang Yang Boundary',
      layerType: 'boundary',
      studyArea: 'mang_yang',
      isPublic: true,
      defaultVisible: true,
      sortOrder: 2,
    },
    {
      title: 'Deforestation Risk Map (RF)',
      layerType: 'risk_raster',
      studyArea: 'all',
      isPublic: true,
      defaultVisible: true,
      sortOrder: 10,
    }
  ]

  for (const l of layers) {
    await payload.create({
      collection: 'map-layers',
      data: l,
    })
  }

  console.log('Seeding complete.')
  process.exit(0)
}

seed()
