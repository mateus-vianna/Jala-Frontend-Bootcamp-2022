import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import IProduct from '../interfaces/IProduct';
import { addProductThunk } from '../redux/reducers/productsReducer';

const CreateProduct = () => {
    const initializer: IProduct = { id: 0, name: '', description: '', price: 0, sku: '' }
    const [product, setProduct] = useState(initializer);
    const dispatch = useDispatch();

    return (
        <div className='auto-div'>
            <h2>Add product</h2>
            <ul>
                <li>
                    <input
                        placeholder="id"
                        type="text"
                        value={product.id}
                        onChange={(event) =>
                            setProduct({ ...product, id: event.target.value })
                        }
                    />
                </li>
                <li>
                    <input

                        placeholder="name"
                        type="text"
                        value={product.name}
                        onChange={(event) =>
                            setProduct({ ...product, name: event.target.value })
                        }
                    />
                </li>
                <li>
                    <input
                        placeholder="description"
                        type="text"
                        value={product.description}
                        onChange={(event) =>
                            setProduct({ ...product, description: event.target.value })
                        }
                    />
                </li>
                <li>
                    <input
                        placeholder="categoryId"
                        type="text"
                        value={product.categoryId}
                        onChange={(event) =>
                            setProduct({ ...product, categoryId: event.target.value })
                        }
                    />
                </li>
                <li>
                    <input
                        placeholder="stockId"
                        type="text"
                        value={product.stockId}
                        onChange={(event) =>
                            setProduct({ ...product, stockId: event.target.value })
                        }
                    />
                </li>

                <button
                    className='btn-black'
                    onClick={() => dispatch<any>(addProductThunk(product))}
                >
                    Add Product
                </button>
            </ul>
        </div>);

}

export default CreateProduct;