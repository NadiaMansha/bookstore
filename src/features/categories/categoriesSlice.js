import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

 const token= JSON.parse(localStorage.getItem('userToken')) || null
const baseUrl='http://51.20.62.104:5000'
const initialState = {
    categories: [],
    status: 'idle',
    error: null
}
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch(`${baseUrl}/categories`)
    
    const data = await response.json()
     
    return data.data
}
)

export const addCategoryAsync= createAsyncThunk('categories/addCategory', async (category) => {
console.log(token)
    try{
        const response = await fetch(`${baseUrl}/categories/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
        const data = await response.json()
       
        return data.data
    }
    catch(error){
        console.log(error)
    }
    
}
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(category => category.id !== action.payload)
        },
        updateCategory: (state, action) => {
            const index = state.categories.findIndex(category => category.id === action.payload.id)
            state.categories[index] = action.payload
        }
    },
    extraReducers: 
    builder => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.categories = state.categories.concat(action.payload)
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        builder.addCase(addCategoryAsync.pending, (state, action) => {
            state.status = 'loading'
        }
        )
        builder.addCase(addCategoryAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.categories.push(action.payload)
        })
        builder.addCase(addCategoryAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
        )
    
      
    }
})

export const {addCategory, removeCategory, updateCategory} = categoriesSlice.actions
export const selectCategories = state => state.categories.categories
export const selectCategoryStatus = state => state.categories.status
export const selectCategoryError = state => state.categories.error
export default categoriesSlice.reducer

