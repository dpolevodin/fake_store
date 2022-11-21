interface ImgModalProps {
    src: string
}

export const ImgModal = ({src}: ImgModalProps) =>
<div>
    <img src={src} alt="" className="img-modal"/>
</div>