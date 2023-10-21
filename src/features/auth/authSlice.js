import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const baseUrl = 'https://90wb7h7uk0.execute-api.us-east-1.amazonaws.com/dev/users'

const userInfo=(localStorage.getItem('userInfo'))!==undefined ? JSON.parse(localStorage.getItem('userInfo')): null
const userToken=(localStorage.getItem('userToken'))!==undefined ? JSON.parse(localStorage.getItem('userToken')): null

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (response.ok) {
        return responseData
      } else {
        console.log(responseData)
        return thunkAPI.rejectWithValue(responseData)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (response.ok) {
      
        return responseData
      } else {
        console.log(responseData)
        return thunkAPI.rejectWithValue(responseData)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
    loading: false,
    userInfo: userInfo,// for user object
    userToken:userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(registerUser.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userInfo = action.payload.user
        state.userToken = action.payload.token
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        localStorage.setItem('userToken', JSON.stringify(state.userToken))
      })
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })

      builder.addCase(loginUser.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userInfo = action.payload.user
        state.userToken = action.payload.token
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        localStorage.setItem('userToken', JSON.stringify(state.userToken))
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })
    }
  })
  

  export const selectAuthLoading = state => state.auth.loading
  export const selectAuthError = state => state.auth.error
  export const selectAuthSuccess = state => state.auth.success
  export const selectAuthUserInfo = state => state.auth.userInfo
  export const selectAuthUserToken = state => state.auth.userToken
  export default authSlice.reducer
  
