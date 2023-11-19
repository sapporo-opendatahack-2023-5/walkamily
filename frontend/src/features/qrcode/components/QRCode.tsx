import { QRCodeCanvas } from "qrcode.react";

type QRCodeProps = {
    userID: string,
    isOpen: boolean,
    onClose: () => void
}

export const QRCode: React.FC<QRCodeProps> = ({ userID, isOpen, onClose }) => {
    return (
        isOpen ? (
            <div className="fixed h-screen w-screen flex justify-center items-center" onClick={onClose}>
                <div className="h-4/5 w-4/5 bg-white flex justify-center items-center">
                    <QRCodeCanvas className="h-3/4 w-3/4" value={userID} />
                </div>
            </div>
        ) : null
    )
}