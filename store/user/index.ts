import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUser: (state) => {
      state.user;
    },
  },
});

export const { getUser } = counterSlice.actions;

export default counterSlice.reducer;
