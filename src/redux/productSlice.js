import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../service.js';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', async (param, {rejectWithValue}) => {
        try {
            let response;
            if (param && param.toLowerCase() === 'all') {
                response = await axios.get('/products');
            } else {
                response = await axios.get(`/products?category=${param}`);
            }
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct', async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.delete(`/products/${id}`);
            
            return response.data;

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct', async ({ product, id }, {rejectWithValue}) => {
        try {
            const response = await axios.patch(`/products/${id}`, product);
            return response.data;

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);


const initialState = {
    products: [],
    status: 'loading',
    error: '' 
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        removeProduct(state, action) {
            state.products = state.products
                .filter(product => product._id !== action.payload.id);
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
            state.products = [];
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.products = [];
        }
    }   
});

export const productsReducer = productSlice.reducer;

export const { removeProduct } = productSlice.actions;

export const productsSelector = state => state.products; 

