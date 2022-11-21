import { useState } from "react"
import { IProduct } from "../models"
import { ImgModal } from "./Modal/modalContent/ImgModal"
import { Modal } from "./Modal/Modal"


interface productProps {
    product: IProduct,
    addToCart: () => void
}

export const Product = ({product, addToCart}: productProps) => {

    const [details, setDetails] = useState(false)
    const [imgModal, setImgModal] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    const bgButton = details ? 'button-blue' : 'button-yellow'
    const btnClasses = ["product__button", bgButton]

    const toCart = () => {
        setCartCount(prev => prev + 1)
        addToCart()
    } 

    return (
        <div className="product">
            <img src={product.image} alt={product.title} className="product__img" onClick={() => setImgModal(true)}/>
            <div className="product__title">{product.title}</div>
            {details && <div className="product__description">{product.description}</div>}
            <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide details' : 'Show details'}</button>
            <div className="add-to-cart">
                <img className="add-to-cart" src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" alt="" onClick={() => toCart()}/>
                <div className="main-cart__count">{cartCount}</div>
            </div>
            {imgModal && <Modal onClose={() => setImgModal(false)}>
                <ImgModal src={product.image}/>
            </Modal>}
        </div>
    )
}