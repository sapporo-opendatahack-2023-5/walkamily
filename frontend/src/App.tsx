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
        latitude: 43.0598309
        ,
        longitude: 141.347055
      }
    },
    {
      id: crypto.randomUUID(),
      name: "中島公園",
      points: 500,
      steps: 4000,
      location: {
        latitude: 43.0446963,
        longitude: 141.3542818
      }
    },
    {
      id: crypto.randomUUID(),
      name: "百合が原公園",
      points: 300,
      steps: 5000,
      location: {
        latitude: 43.1281718,
        longitude: 141.364969
      }
    }
  ]
  return (
    <SpotMapTemplate spots={spots} />
  )
}

export default App
