import { useState } from 'react';
import { Menu } from './features/menu/components/Menu';
import { QRCodeButton } from './features/menu/components/QRCodeButton';
import { QRCode } from './features/qrcode/components/QRCode';
import { SpotMapTemplate } from './features/spot_map/components/SpotMapTemplate';
import { useSpotSelect } from './features/spot_map/hooks/useSpotSelect';
import { Spot } from './features/types/Spot';

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
      latitude: 43.1281718,
      longitude: 141.364969
    }
  }
]


function App() {

  const spotSelectResult = useSpotSelect(spots);
  const [isQROpen, setIsQROpen] = useState(false);


  if (!spotSelectResult) {
    return null;
  }

  const { handleSpotSelect, selectedSpot } = spotSelectResult;
  return (
    <div className="w-screen h-screen flex flex-col">
      <Menu spots={{
        otherList: spots.filter(spot => spot.id != selectedSpot.id),
        selected: selectedSpot
      }} onSelectSpot={handleSpotSelect} initialOpen={false} qrCodeButton={<QRCodeButton onClick={() => setIsQROpen(!isQROpen)} />} />
      <div className="w-full h-full flex-auto">
        <SpotMapTemplate spots={spots} selectedSpot={selectedSpot} />
      </div>
      <QRCode userID='sample' isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
    </div>
  )
}

export default App
