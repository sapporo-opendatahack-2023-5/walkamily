import React from "react";

type MenuToggleButtonProps = {
    isOpen: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ isOpen = false, onClick }) => {
    const down = <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none" className="w-12 h-12">
        <path d="M24.5 31.3906L12.25 19.1406L15.1083 16.2823L24.5 25.674L33.8917 16.2823L36.75 19.1406L24.5 31.3906Z" fill="white" />
    </svg>;

    const up = <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none" className="w-12 h-12">
        <path d="M24.5 17.6094L36.75 29.8594L33.8917 32.7177L24.5 23.326L15.1083 32.7177L12.25 29.8594L24.5 17.6094Z" fill="white" />
    </svg>
    return (
        <button className="flex items-center" onClick={onClick}>
            <div className="text-white font-sans text-base" style={{
                letterSpacing: "0.06rem",
            }}>
                {isOpen ? "折りたたむ" : "ほかのスポットを探す"}
            </div>
            {
                isOpen ? up : down
            }
        </button>
    )
}
