type ButtonProps = {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="flex justify-center px-4 py-2 items-center rounded-lg border-white border-2 border-solid text-base">
            <span className="text-white font-sans" style={{
                letterSpacing: "0.06rem",
            }}>
                {children}
            </span>
        </button>
    )
}

