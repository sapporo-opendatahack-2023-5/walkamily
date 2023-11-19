import { Spot } from "../../types/Spot"
import { Menu } from "./Menu"
import { useSpotSelect } from "../hooks/useSpotSelect"

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

  return (
    <div className="w-screen h-screen">
      <Menu spots={{
        otherList: spots.filter(spot => spot.id != selectedSpot.id),
        selected: selectedSpot
      }} onSelectSpot={handleSpotSelect} initialOpen={false} />
      <div>
      </div>
    </div>
  )
  // Map
}