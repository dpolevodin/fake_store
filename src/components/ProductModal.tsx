import { IProduct } from "../models"

interface productModalProps {
    product: IProduct,
    onDel: () => void
}

export const ProductModal = ({product, onDel }: productModalProps) => {

    return (
        <div className="product-modal">
            <img src={product.image} alt={product.title} className="product__img" onClick={() => onDel()}/>
            <div className="product__title">{product.title}</div>
        </div>
    )
}