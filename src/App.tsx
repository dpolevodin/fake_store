import { Product } from './components/product';
import { useProducts } from './hooks/products';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal/Modal';
import { CreateProduct } from './components/Modal/modalContent/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';
import { DeleteProduct } from './components/Modal/modalContent/DeleteProduct';

function App() {
  const {loading, error, products, addProduct, delProduct} = useProducts()
  const [modalCreate, setModalCreate] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const createHandler = (product: IProduct) => {
    setModalCreate(false)
    addProduct(product)
  }

  const deleteHandler = (product: IProduct) => {
    setModalDelete(false)
    delProduct(product)
  }


  return (
    <>
      <div className="header">Fake Store</div>

      {error && <Error error={error}/>}
      {loading && <Loader /> }

      {products.map(prod => <Product product={prod} addToCart={() => setCartCount(prev => prev + 1)}/>)}
      
      {modalCreate && <Modal onClose={() => setModalCreate(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      {modalDelete && <Modal onClose={() => setModalDelete(false)}>
        <DeleteProduct productList={products} onDelete={deleteHandler}/>
      </Modal>}

      <button className="add-product button-yellow" onClick={() => setModalCreate(true)}>Add Product</button>
      <button className="delete-product button-red" onClick={() => setModalDelete(true)}>Delete Product</button>
      <div className="main-cart">
        <img className="main-cart__pic" src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png" alt="" />
        <span className="main-cart__count">{cartCount}</span>
      </div>
    </>
  );
}

export default App;
