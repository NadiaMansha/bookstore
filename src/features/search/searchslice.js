import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const url="http://localhost:3000/books/search";
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (searchTerm) => {
        console.log(searchTerm)
        const response = await fetch(`${url}/${searchTerm}`);
        const data = await response.json();
        console.log(data.data);
        return data.data;
    }
);

const initialState = {
    searchResult: [],
    status: "idle",
    error: null,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearch.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.searchResult = action.payload;
            state.status = "succeeded";
        },
        [fetchSearch.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        },
    },
});

export default searchSlice.reducer;
export const selectSearchResult = (state) => state.search.searchResult;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchError = (state) => state.search.error;



