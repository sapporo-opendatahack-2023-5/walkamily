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
        <menu className="flex flex-col px-8 py-6 items-end justify-between" style={{
            background: "#267DFF",
            boxShadow: "0px 4px 4px 0px rgba(38, 125, 255, 0.25)",
        }}>

            <div className="flex justify-end items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12" color="white">
                    <path d="M26 42V38H30V42H26ZM22 38V28H26V38H22ZM38 32V24H42V32H38ZM34 24V20H38V24H34ZM10 28V24H14V28H10ZM6 24V20H10V24H6ZM24 10V6H28V10H24ZM9 15H15V9H9V15ZM6 18V6H18V18H6ZM9 39H15V33H9V39ZM6 42V30H18V42H6ZM33 15H39V9H33V15ZM30 18V6H42V18H30ZM34 42V36H30V32H38V38H42V42H34ZM26 28V24H34V28H26ZM18 28V24H14V20H26V24H22V28H18ZM20 18V10H24V14H28V18H20ZM10.5 13.5V10.5H13.5V13.5H10.5ZM10.5 37.5V34.5H13.5V37.5H10.5ZM34.5 13.5V10.5H37.5V13.5H34.5Z" fill="white" />
                </svg>
                <div className="w-10 h-10 rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col gap-8 w-full">
                <SelectedSpot spot={spots.selected} />
                {isOpen && <OtherSpotList spots={spots.otherList} renderSpot={spot => <OtherSpot spot={spot} onSpotClick={onSelectSpot} />} />}

            </div>
            <MenuToggleButton isOpen={isOpen} onClick={handleToggleClick} />
        </menu>
    )
}