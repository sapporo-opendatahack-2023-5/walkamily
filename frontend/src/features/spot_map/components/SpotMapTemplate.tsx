import { Spot } from "../../types/Spot"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

type SpotMapTemplateProps = {
  spots: Spot[],
  selectedSpot: Spot
}

export const SpotMapTemplate: React.FC<SpotMapTemplateProps> = ({ spots, selectedSpot }) => {
  // hack:ここにhooks呼び出しを置かない。containerに置く

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
      <Map center={selectedPosition} zoom={14}>
        {
          spots.map(
            spot => (
              <Marker key={spot.id} position={spotToGoogleMapsPosition(spot)} />
            )
          )
        }
      </Map>
    </APIProvider>
  )
}