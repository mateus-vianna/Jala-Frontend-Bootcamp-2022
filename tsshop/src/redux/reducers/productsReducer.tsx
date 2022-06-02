
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduct from "../../interfaces/IProduct";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";

interface ProductState {
    value: IProduct[]
}

const initialState: ProductState = {
    value: []
}

export const shopSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state: any, action: PayloadAction<IProduct>) => {
            state.value = state.value.concat(action.payload);
        },
        addProducts: (state: any, action: PayloadAction<IProduct[]>) => {
            state.value = state.value.concat(action.payload);
        },
        removeProduct: (state: any, action: PayloadAction<IProduct>) => {
            state.value = state.value.filter((prd: any) => prd.id !== action.payload.id);
        },
    },
});

export const loadProductsThunk = () => async (dispatch: any, getState: any) => {
    try {
        const response: IProduct | any = await fetch("http://localhost:5289/api/Products");
        const products: IProduct[] = await response.json();
        dispatch(addProducts(products));
    } catch (error) {
        console.log("Error on load products:", error);
    }
};

export const addProductThunk = (product: IProduct) => async (dispatch: any, getState: any) => {
    try {
        const response: IProduct | any = await fetch("http://localhost:5289/api/Products", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        const result: IProduct = await response.json();
        dispatch(addProduct(result));
    } catch (error) {
        console.log('Error on adding product thunk', error);
    }
};

export const removeProductThunk = (id: number | string) => async (dispatch: any, getState: any) => {
    try {
        let response: IProduct | any = await fetch(
            `http://localhost:5289/api/Products/${id}`,
            {
                method: "DELETE",
            }
        );
        response = await response.json();
        dispatch(removeProduct(response));
    } catch (error) {
        console.log("Error on load products:", error);
    }
};

export const { addProduct, addProducts, removeProduct } = shopSlice.actions;
export const selectProducts = (state: RootState) => state.products.value;
export default shopSlice.reducer;
