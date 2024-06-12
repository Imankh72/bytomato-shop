import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/products";
import { RootState } from "../store";

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  favoriteProducts: Product[];
  searchItem: string;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  searchItem: "",
  favoriteProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setFilter: (state, action) => {
      if (typeof action.payload === "string") {
        state.filteredProducts = state.products.filter((p) =>
          p.title.includes(action.payload)
        );
      }
      if (typeof action.payload === "number") {
        state.filteredProducts = state.products.filter(
          (p) => p.categoryId === action.payload
        );
      }
    },
    setSearchItem: (state, action: PayloadAction<string>) => {
      state.searchItem = action.payload;
    },
    setFavorite: (state, action: PayloadAction<Product>) => {
      const favoriteProduct = state.favoriteProducts.filter(
        (p) => p.id === action.payload.id
      );

      if (favoriteProduct.length === 0) {
        state.favoriteProducts.push(action.payload);
      } else {
        const favoriteProducts = state.favoriteProducts.filter(
          (p) => p.id !== action.payload.id
        );
        state.favoriteProducts = favoriteProducts;
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const filteredFavoriteProducts = state.favoriteProducts.filter(
        (p) => p.id !== action.payload
      );
      state.favoriteProducts = filteredFavoriteProducts;
    },
  },
});

export const {
  setProducts,
  setFilter,
  setSearchItem,
  setFavorite,
  removeFavorite,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const selectSearchItem = (state: RootState) => state.products.searchItem;
export const selectFavoriteProducts = (state: RootState) =>
  state.products.favoriteProducts;

export const productsReducer = productsSlice.reducer;
