import {configureStore} from '@reduxjs/toolkit';
import  counterReducer from './counterSlice';
import ProductReducer from "./ProductReducer";
 
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ProductReducer: ProductReducer,
    }
})