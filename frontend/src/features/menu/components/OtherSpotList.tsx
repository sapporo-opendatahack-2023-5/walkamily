import React from "react"
import { Spot } from "../../types/Spot"

type OtherSpotListProps = {
  spots: Spot[],
  renderSpot: (spot: Spot) => React.ReactElement
}

export const OtherSpotList: React.FC<OtherSpotListProps> = ({ spots, renderSpot }) => {
  return (
    <ul className="flex flex-col items-start gap-6 self-stretch">
      {
        spots.map(spot => <li key={spot.id} className="w-full">{renderSpot(spot)}</li>)
      }
    </ul>
  );
}