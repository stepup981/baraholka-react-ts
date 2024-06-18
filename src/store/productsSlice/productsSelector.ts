import { createSelector } from "@reduxjs/toolkit";

import { IStateProducts } from "../../types/typeProducts";
import { IRootState } from "../../types";

const selectProductsState = (state: IRootState): IStateProducts => state.products;

const filteredProducts = createSelector(selectProductsState, (productsSLice) => {
  const { products, searchInput } = productsSLice;
  if (!searchInput) return products;
  return products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
});

export { filteredProducts };
