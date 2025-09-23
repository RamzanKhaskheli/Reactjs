import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    product: [],
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getproducts: (state,action)=>{
            state.product = action.payload
        }
    }



})

export default ProductSlice.reducer;
export const {getproducts} = ProductSlice.actions;