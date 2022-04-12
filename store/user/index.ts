import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../services";

const initialState: any = {};

const fetchCurrentUser = createAsyncThunk("users/fetchCurrentUser", async () => {
  const response = await axiosInstance.get("/user/info", {});
  return response.data;
});

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
