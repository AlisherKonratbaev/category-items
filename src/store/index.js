import { configureStore, } from '@reduxjs/toolkit'
import itemSlice from "./itemSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        item: itemSlice,
        filter: filterSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})