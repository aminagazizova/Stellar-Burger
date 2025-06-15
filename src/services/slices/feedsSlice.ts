// src/services/slices/feedsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedsApi } from '../../utils/burger-api';
import { TOrder } from '../../utils/types';

interface FeedsState {
  orders: TOrder[];
  loading: boolean;
  error: string | null;
}

const initialState: FeedsState = {
  orders: [],
  loading: false,
  error: null
};

export const fetchFeeds = createAsyncThunk(
  'feeds/fetchFeeds',
  async (_, thunkAPI) => {
    try {
      const data = await getFeedsApi();
      return data.orders;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default feedsSlice.reducer;
