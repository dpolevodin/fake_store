import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product])
  }

  const delProduct = (product: IProduct) => {
    products.splice(products.indexOf(product), 1)
    setProducts(products)
  }

  async function fetchProds () {
    try {
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=2')
      setProducts(response.data)
      setLoading(false)
    }
    catch (e: unknown) {
      setLoading(false)
      const error = e as AxiosError
      setError(error.message)
    }
  }

useEffect(() => {
  fetchProds()
}, [])

return {products, loading, error, addProduct, delProduct}
}