import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const token= JSON.parse(localStorage.getItem('userToken')) || null
const baseUrl='http://51.20.62.104:5000'
//get a book by id
export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id) => {
    const response = await fetch(`${baseUrl}/books/${id}`)
    const data = await response.json()
    return data.book
}
)
const initialState = {
    book: {},
    status: 'idle',
    error: null
}

const bookDetailsSlice = createSlice({
    name: 'bookDetails',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.book.push(action.payload)
        },
        removeBook: (state, action) => {
            state.book = state.book.filter(book => book.id !== action.payload)
        },
        updateBook: (state, action) => {
            const index = state.book.findIndex(book => book.id === action.payload.id)
            state.book[index] = action.payload
        }
    },
    extraReducers: 
    builder => {
        builder.addCase(fetchBookById.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchBookById.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.book = action.payload
        })
        builder.addCase(fetchBookById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { addBook, removeBook, updateBook } = bookDetailsSlice.actions
export default bookDetailsSlice.reducer
export const selectBook= state => state.bookDetails.book
export const selectBookStatus = state => state.bookDetails.status
export const selectBookError = state => state.bookDetails.error
