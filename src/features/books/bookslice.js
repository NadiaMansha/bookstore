import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem("userToken")) || null;
const baseUrl = "http://localhost:3000";
const initialState = {
  books: [],
  status: "idle",
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(`${baseUrl}/books`);
  const data = await response.json();
  return data.data;
});

//add a book
export const addNewBook = createAsyncThunk("books/addNewBook", async (book) => {
  const response = await fetch(`${baseUrl}/books/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: book,
  });
  const data = await response.json();
  console.log(data);
  return data.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    //get all books

    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.books = state.books.concat(action.payload);
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    //add a book

    builder.addCase(addNewBook.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.books = state.books.concat(action.payload);
    });
    builder.addCase(addNewBook.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;
export const selectBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;
export default bookSlice.reducer;
