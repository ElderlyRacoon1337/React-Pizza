import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { currentPage, sortBy, order, category, search } = params;
    const { data } = await axios.get(
      // `https://63c5429af80fabd877e42b14.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      `https://63c5429af80fabd877e42b14.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
