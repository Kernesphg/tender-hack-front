import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  sliderBooks: [],
  loadingStatus: '',
  pageCount: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooksStatus', async () => {
  const res = await axios.get(`https://651fcfd4906e276284c38cd5.mockapi.io/items?`);

  return { res: res.data };
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loadingStatus = 'loading';
        state.books = [];
        state.sliderBooks = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload.res;
        state.pageCount = Math.ceil(action.payload.res.length / 10);
        state.sliderBooks = action.payload.res2;
        state.loadingStatus = 'success';
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loadingStatus = 'error';
        state.books = [];
        state.sliderBooks = [];
      });
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
