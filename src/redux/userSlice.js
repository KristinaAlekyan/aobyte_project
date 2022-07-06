import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../service.js';

export const fetchLogin = createAsyncThunk(
    'users/fetchLogin', async (params) => {
        const response = await axios.post('/login', params);
        return response.data;
    }
);

export const fetchRegister = createAsyncThunk(
    'users/fetchRegister', async (params) => {
        const response = await axios.post('/register', params);
        return response.data;
    }
);

export const fetchMe = createAsyncThunk(
    'users/fetchMe', async () => {
        const response = await axios.get('/me');
        return response.data;
    }
);

const initialState = {
   userData: null,
   status: 'loading',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.userData = null;
        }
    },
    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.userData = null;
            state.status = 'loading';
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.status = 'loaded';  
        },
        [fetchLogin.rejected]: (state, action) => {
            state.userData = null;
            state.status = 'error';
        },
        [fetchMe.pending]: (state) => {
            state.userData = null;
            state.status = 'loading';
        },
        [fetchMe.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.status = 'loaded';
        },
        [fetchMe.rejected]: (state, action) => {
            state.userData = null;
            state.status = 'error';
        },
        [fetchRegister.pending]: (state) => {
            state.userData = null;
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state, action) => {
            state.userData = null;
            state.status = 'error';
        },
    }
});

export const usersReducer = usersSlice.reducer;

export const authSelector = state => Boolean(state.users.userData);
export const userSelector = state => state.users.userData; 

export const { logout } = usersSlice.actions;