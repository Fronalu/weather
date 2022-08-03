import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    units: 'metric'
}

const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {
        setUnits(state, action) {
            state.units = action.payload;
        }
    }
})

export const { setUnits } = unitsSlice.actions;
export default unitsSlice.reducer;