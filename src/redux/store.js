import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./userSlice";
import { productsReducer } from "./productSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer
  },
});

export default store;