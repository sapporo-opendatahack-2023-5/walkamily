import { SpotMapTemplate } from './features/spot_map/components/SpotMapTemplate';
import { Spot } from './features/types/Spot';

function App() {
  const spots: Spot[] = [
    {
      id: crypto.randomUUID(),
      name: "大通公園",
      points: 400,
      steps: 3000,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      id: crypto.randomUUID(),
      name: "平岸公園",
      points: 500,
      steps: 4000,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      id: crypto.randomUUID(),
      name: "百合が原公園",
      points: 300,
      steps: 5000,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  ]
  return (
    <SpotMapTemplate spots={spots} />
  )
}

export default App
