import React, { useState } from "react";
import { MenuToggleButton } from "./MenuToggleButton";
import { Spot } from "../../types/Spot";
import { SelectedSpot } from "./SelectedSpot";
import { OtherSpotList } from "./OtherSpotList";
import { OtherSpot } from "./OtherSpot";

type MenuProps = {
    spots: {
        selected: Spot
        otherList: Spot[]
    },
    initialOpen?: boolean,
    onSelectSpot: (spot: Spot) => void
}


export const Menu: React.FC<MenuProps> = ({ spots, initialOpen = false, onSelectSpot }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <menu className="flex flex-col px-8 py-6 items-end" style={{
            background: "#267DFF",
            boxShadow: "0px 4px 4px 0px rgba(38, 125, 255, 0.25)",
        }}>
            <div className="flex flex-col gap-8 w-full">
                <SelectedSpot spot={spots.selected} />
                {isOpen && <OtherSpotList spots={spots.otherList} renderSpot={spot => <OtherSpot spot={spot} onSpotClick={onSelectSpot} />} />}

            </div>
            <MenuToggleButton isOpen={isOpen} onClick={handleToggleClick} />
        </menu>
    )
}