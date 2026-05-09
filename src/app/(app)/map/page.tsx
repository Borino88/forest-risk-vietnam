import { MapComponent } from '@/components/map/MapComponent'

export const metadata = {
  title: 'Interactive Deforestation Risk Map | Gia Lai Province',
  description: 'Explore the 1 km resolution deforestation risk prediction map for K’Bang and Mang Yang districts, Vietnam. Based on the Random Forest pipeline.',
}

export default function MapPage() {
  return (
    <main className="bg-white overflow-hidden" aria-label="Interactive Risk Map">
      <MapComponent />
    </main>
  )
}
