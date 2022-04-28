import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterReducer";
import { backpack } from "./reducer/shopReducer";

const reducers = {
  counter: counterReducer,
  backpack: backpack,
};

const allReducers = combineReducers(reducers);

export default configureStore({
  reducer: { allReducers },
});
