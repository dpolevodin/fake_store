interface modalProps {
    children: React.ReactNode
    onClose: () => void
}

export const Modal = ({children, onClose}: modalProps) =>
<div className="modal">
    <div className="modal__bg" onClick={() => onClose()}></div>
    <div className="modal__window">
        {children}
    </div>
</div>