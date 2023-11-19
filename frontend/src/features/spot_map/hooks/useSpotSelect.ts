import { useState } from "react";
import { Spot } from "../../types/Spot";

export const useSpotSelect = (spots: Spot[]) => {
  const [selectedSpotId, setSeletcedSpotId] = useState<string | null>(spots[0]?.id ?? null);

  if (selectedSpotId == null) {
    // スポットが存在しない
    return null
  }

  const findedSpot = spots.filter(spot => spot.id == selectedSpotId)[0];
  // fixme:spotsの中に、selectedSpotIdをidにもつものがなかった場合にundefined

  return {
    selectedSpot: findedSpot,
    handleSpotSelect: (spot: Spot) => {
      setSeletcedSpotId(spot.id);
    }
  }
}
