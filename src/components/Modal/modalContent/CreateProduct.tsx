import axios from "axios"
import React, { useState } from "react"
import { productData } from "../../../data/products"
import { IProduct } from "../../../models"



interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export const CreateProduct = ({onCreate}: CreateProductProps) =>{

const [value, setValue] = useState('')

const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    let rand = Math.floor(Math.random() * productData.length);
    productData[rand].title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData[rand])
    onCreate(response.data)
}

return (
    <div className="create_product">
        <h1 className="create_product__title">Create new product</h1>
        <form className="create-product__form" onSubmit={submitHandler}>
            <input value={value} className="create_product__input" placeholder="enter product's title..." onChange={event => setValue(event.target.value)}/>
            <button className="create_product__button button-yellow" type="submit">Add</button>
        </form>
    </div>
    )
}
