import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//get user from localStorage
const user = localStorage.getItem('user')

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const register = createAsyncThunk('user/register', async (user, thunkAPI) => {

    try {
        return await authService.register(user)
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  
})

// export const login = createAsyncThunk('user/login', async () => {

// })

// export const logout = createAsyncThunk('user/logout', async () => {

// })

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.user = null
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = payload
        })
        .addCase(register.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isError = payload
            state.user = null
        })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;