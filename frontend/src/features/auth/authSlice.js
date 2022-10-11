import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async (user, {rejectWithValue}) => {

    try {
        return await authService.register(user)
        
    } catch (error) {
        const message = (error.response  && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
  
})

export const login = createAsyncThunk('auth/login', async (user, {rejectWithValue}) => {

    try {
        return await authService.login(user)
        
    } catch (error) {
        const message = (error.response  && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
  
})

export const logout = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
   try {

    return await authService.logout()
    
   } catch (error) {
    return rejectWithValue(error)
   }
})

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
            state.isError = true
            state.message = payload
            state.user = null
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = payload
        })
        .addCase(login.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.message = payload
            state.user = null
        })
        .addCase(logout.rejected, (state) => {
            state.user = null
        })
        
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;