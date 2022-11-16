import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    ideas: [],
    isLoading: false,
    isError: false,
    message: '',
    isSuccess: false

}


export const createNotes = createAsyncThunk('api/createIdea', async (idea, {rejectWithValue}) => {
    try {
        
    } catch (error) {
        
    }

})


export const getIdea = createAsyncThunk('api/getIdea', async () => {
    try {
        
    } catch (error) {
        
    }
})

export const deleteIdea = createAsyncThunk('api/deleteIdea', async () => {
    try {
        
    } catch (error) {
        
    }
})


export const noteSlice = createSlice({
    name: 'ideas',
    initialState,
})