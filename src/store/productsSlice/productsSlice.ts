import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

import { IStateProducts, IProducts } from "../../types/typeProducts";

const initialState: IStateProducts = {
  products: [],
  searchInput: "",
};

const productsSlise = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {})
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProducts[]>) => {
          state.products = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state) => {
        alert("Ошибка");
      });
  },
});

export const { setSearchInput } = productsSlise.actions;
export default productsSlise.reducer;
