import { configureStore } from "@reduxjs/toolkit";
import productSizeReducer from "./productSizeSlice.js";

const store = configureStore({
  reducer: {
    productSizeReducer,
},
});
export default store;
