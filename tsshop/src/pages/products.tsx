import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadProductsThunk, removeProductThunk } from "../redux/reducers/productsReducer";
import { useLinkClickHandler } from "react-router-dom";
import IProduct from "../interfaces/IProduct";

const Products: React.FC = () => {
    const products = useAppSelector((state) => state.products.value)
    const dispatch = useAppDispatch();

    const handleClick = (id: number | string) => {
        dispatch(removeProductThunk(id));
    }

    return (
        <Box sx={{
            width: '100%', height: '100%', maxWidth: 360,
            bgcolor: 'lightcyan',
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
        }}>
            <List>
                {products?.map((product: IProduct, index: number = 0) => {
                    return (
                        <ListItemButton key={index++} onClick={() => handleClick(product.id)} >
                            <ul>
                                <li><h3>{product.name}</h3></li>
                                <li>{product.sku}</li>
                                <li>{product.price}</li>
                                <div style={{ marginTop: 10, width: 100, height: 3, backgroundColor: 'black' }} />
                            </ul>
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    )

}


export default Products;