import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {status} from "../helper";
import {getCategory} from "../helper";


export const fetchItems = createAsyncThunk(
    'item/fetchItems',
    async function (category= null, {rejectWithValue}) {
        try {
            const response = await fetch("https://api.unsplash.com/photos/random/?count=9&client_id=2POOp_FgpFk0QbsMqgyV6il1G1yEPANXXRrxGdLmMSo")

            if (!response.ok) {
                throw new Error("Server error!")
            }

            const data = await response.json();
            return {
                data,
                category,
            };

        } catch (err) {
            return rejectWithValue(err.message)
        }

    }
)

const initialState = {
    list: [],
    status: null,
    error: null,
    selectedId: [],
}
export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.list = [...state.list, ...action.payload]
        },
        removeItems: (state, action) => {
            state.list = state.list.filter(item => !state.selectedId.includes(item.id))
        },
        setSelectedId: (state, action) => {
            if (state.selectedId.includes(action.payload)) {
                state.selectedId = state.selectedId.filter(id => id != action.payload)
            } else {
                state.selectedId.push(action.payload);
            }
        },
        clearSelectedId: (state) => {
            state.selectedId = [];
        }
    },
    extraReducers: {
        [fetchItems.pending]: (state, action) => {
            state.status = status.loading
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.status = status.resolved
            const items = action.payload.data.map((item,index) => {
                return {
                    id: index + Date.now(),
                    urls: item.urls,
                    title:item.user.location,
                    category:getCategory(action.payload.category),
                }
            })
            state.list = [...state.list, ...items];
        },
        [fetchItems.rejected]: (state, action) => {
            state.status = status.rejected;
            state.error = action.payload;
        },
    }
})

export const {addItems, removeItems, setSelectedId, clearSelectedId} = itemSlice.actions

export default itemSlice.reducer