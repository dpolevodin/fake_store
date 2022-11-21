import { useState } from "react"
import { IProduct } from "../models"
import { ImgModal } from "./Modal/modalContent/ImgModal"
import { Modal } from "./Modal/Modal"

interface productProps {
    product: IProduct,
}

export const Product = ({product}: productProps) => {

    const [details, setDetails] = useState(false)
    const [imgModal, setImgModal] = useState(false)

    const bgButton = details ? 'button-blue' : 'button-yellow'
    const btnClasses = ["product__button", bgButton]

    return (
        <div className="product">
            <img src={product.image} alt={product.title} className="product__img" onClick={() => setImgModal(true)}/>
            <div className="product__title">{product.title}</div>
            {details && <div className="product__description">{product.description}</div>}
            <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide details' : 'Show details'}</button>
            {imgModal && <Modal onClose={() => setImgModal(false)}>
                <ImgModal src={product.image}/>
            </Modal>}
        </div>
    )
}