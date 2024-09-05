import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allPosts = createAsyncThunk("posts", async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/youssef-habib3/repos`
  );

  return data;
});

interface Initial {
  data: string[];
}

const initialState: Initial = {
  data: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(allPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default postSlice.reducer;
