import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsReducer'
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const store = configureStore({
    reducer: {
        products: productsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;