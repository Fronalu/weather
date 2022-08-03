import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [
        {
            id: 1,
            name: 'Kyiv'
        },
        {
            id: 2,
            name: 'London'
        },
        {
            id: 3,
            name: 'Riga'
        },
        {
            id: 4,
            name: 'Paris'
        },
        {
            id: 5,
            name: 'Berlin'
        }
    ]
}

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {

    }
})

export default citiesSlice.reducer;