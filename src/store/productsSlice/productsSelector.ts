import { createSelector } from "@reduxjs/toolkit";

import { IStateProducts, IRootState } from "../../types/typeProducts";


const selectProductsState = (state: IRootState): IStateProducts => state.products;

const filteredProducts = createSelector(
  selectProductsState,
  (productsSLice) => {
    const { products, searchInput } = productsSLice;
    if (!searchInput) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
);

export { filteredProducts };
