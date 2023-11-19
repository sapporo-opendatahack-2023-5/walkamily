import { Spot } from "../../types/Spot"
import { Menu } from "./Menu"
import { useSpotSelect } from "../hooks/useSpotSelect"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

type SpotMapTemplateProps = {
  spots: Spot[]
}

export const SpotMapTemplate: React.FC<SpotMapTemplateProps> = ({ spots }) => {
  // hack:ここにhooks呼び出しを置かない。containerに置く
  const spotSelectResult = useSpotSelect(spots);

  if (!spotSelectResult) {
    return (
      <div>
      </div>
    )
  }

  const { selectedSpot, handleSpotSelect } = spotSelectResult;

  const spotToGoogleMapsPosition = (spot: Spot) => {
    const location = spot.location;
    return {
      lat: location.latitude,
      lng: location.longitude
    }
  }

  const selectedPosition = spotToGoogleMapsPosition(selectedSpot);

  return (
    <APIProvider apiKey={"AIzaSyDQAj6Xy8ZDMAs_4K-1aI2jY1DetwJ6XoY"}>
      <div className="w-screen h-screen flex flex-col">
        <Menu spots={{
          otherList: spots.filter(spot => spot.id != selectedSpot.id),
          selected: selectedSpot
        }} onSelectSpot={handleSpotSelect} initialOpen={false} />
        <div className="w-full h-full flex-auto">
          <Map center={selectedPosition} zoom={14}>
            {
              spots.map(
                spot => (
                  <Marker key={spot.id} position={spotToGoogleMapsPosition(spot)} />
                )
              )
            }
          </Map>
        </div>
      </div>
    </APIProvider>
  )
}