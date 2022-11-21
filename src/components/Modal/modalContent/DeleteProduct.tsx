import { IProduct } from "../../../models"
import { Product } from "../../product"
import { ProductModal } from "../../ProductModal"

interface DeleteProductProps {
    onDelete: (product: IProduct) => void
    productList: IProduct[]
}

export const DeleteProduct = ({ productList, onDelete }: DeleteProductProps) => {

   

    return (
        <div className="delete_product">
            <h1 className="delete_product-title">Delete Product</h1>
            <div className="product_list">
                {productList.map(prod => <ProductModal onDel={() => onDelete(prod)} product={prod}/>)}
            </div>
        </div>
    )
}