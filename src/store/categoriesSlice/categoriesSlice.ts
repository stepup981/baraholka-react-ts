import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "@store/categoriesSlice/categoriesAction";

import { ICategories, IStateCategories } from "../../types/typeCategories";

const initialState: IStateCategories = {
  categories: [],
  activeCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategories: (state, action: PayloadAction<string>) => {
      if (state.activeCategories.includes(action.payload)) {
        state.activeCategories = state.activeCategories.filter((item) => item !== action.payload);
      } else {
        state.activeCategories.push(action.payload);
      }
    },
    clearActiveCategories: (state) => {
      state.activeCategories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {})
      .addCase(getCategories.fulfilled, (state, action: PayloadAction<ICategories[]>) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {});
  },
});

export const { setActiveCategories, clearActiveCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
