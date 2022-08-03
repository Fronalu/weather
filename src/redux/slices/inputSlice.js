import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: ''
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    }
})

export const { setSearchValue } = inputSlice.actions;
export default inputSlice.reducer;