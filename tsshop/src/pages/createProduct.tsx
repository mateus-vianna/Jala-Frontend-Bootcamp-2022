import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import IProduct from '../interfaces/IProduct';
import { addProductThunk } from '../redux/reducers/productsReducer';

const CreateProduct = () => {
    const initializer: IProduct = { id: 0, name: '', description: '', price: 0, sku: '' }
    const [product, setProduct] = useState(initializer);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Add product</h2>
            <ul>
                <li>
                    <input
                        style={{
                            marginTop: 8,
                            backgroundColor: "black",
                            color: "green",
                            fontSize: 18,
                            borderRadius: 5,
                            borderBlockWidth: 3,
                        }}
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
                        style={{
                            marginTop: 8,
                            backgroundColor: "black",
                            color: "green",
                            fontSize: 18,

                            borderRadius: 5,
                            borderBlockWidth: 3,
                        }}
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
                        style={{
                            marginTop: 8,
                            backgroundColor: "black",
                            color: "green",
                            fontSize: 18,

                            borderRadius: 5,
                            borderBlockWidth: 3,
                        }}
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
                        style={{
                            marginTop: 8,
                            backgroundColor: "black",
                            color: "green",
                            fontSize: 18,

                            borderRadius: 5,
                            borderBlockWidth: 3,
                        }}
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
                        style={{
                            marginTop: 8,
                            backgroundColor: "black",
                            color: "green",
                            fontSize: 18,

                            borderRadius: 5,
                            borderBlockWidth: 3,
                        }}
                        placeholder="stockId"
                        type="text"
                        value={product.stockId}
                        onChange={(event) =>
                            setProduct({ ...product, stockId: event.target.value })
                        }
                    />
                </li>

                <button
                    style={{
                        marginTop: 8,
                        marginLeft: 50,
                        backgroundColor: "black",
                        color: "green",
                        fontSize: 18,

                        borderRadius: 5,
                        borderBlockWidth: 3,
                    }}
                    onClick={() => dispatch<any>(addProductThunk(product))}
                >
                    Add Product
                </button>
            </ul>
        </div>);

}

export default CreateProduct;