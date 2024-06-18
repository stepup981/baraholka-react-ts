import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBag } from "@store/bagSlice/bagActions";

import { IBag, IStateBag } from "../../types/typeBag";

const initialState: IStateBag = {
  bag: [],
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBag.pending, (state) => {})
      .addCase(getBag.fulfilled, (state, action: PayloadAction<IBag[]>) => {
        state.bag = action.payload;
      })
      .addCase(getBag.rejected, (state) => {
        alert("oshibka");
      });
  },
});

export default bagSlice.reducer;
