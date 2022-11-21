import { Product } from './components/product';
import { useProducts } from './hooks/products';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal/Modal';
import { CreateProduct } from './components/Modal/modalContent/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }


  return (
    <>
      {error && <Error error={error}/>}
      {loading && <Loader /> }
      {products.map(prod => <Product product={prod} />)}
      
      {modal && <Modal onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button className="add-product button-yellow" onClick={() => setModal(true)}>Add Product</button>
    </>
  );
}

export default App;
