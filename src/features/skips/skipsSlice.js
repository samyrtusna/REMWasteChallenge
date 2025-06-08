import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import skipService from "../../axiosServices/skipService";

export const fetchSkipsList = createAsyncThunk(
  "skips/fetchSkipsList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await skipService.getSkips();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const skipSlice = createSlice({
  name: "skips",
  initialState: {
    skips: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkipsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkipsList.fulfilled, (state, action) => {
        state.loading = false;
        state.skips = action.payload;
      })
      .addCase(fetchSkipsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default skipSlice.reducer;
