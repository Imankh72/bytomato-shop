import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categories";
import { productsReducer } from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
