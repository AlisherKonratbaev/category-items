import {createSlice} from "@reduxjs/toolkit";
import {categories} from "../helper";

const initialState = {
    categories: [...categories],
    currentCategory: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
        },
    }
})

export const {setCurrentCategory} = filterSlice.actions

export default filterSlice.reducer