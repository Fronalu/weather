import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './slices/citiesSlice'
import inputSlice from './slices/inputSlice'
import querySlice from './slices/querySlice'
import unitsSlice from './slices/unitsSlice'
import weatherSlice from './slices/weatherSlice'

export const store = configureStore({
    reducer: {
        cities: citiesSlice,
        input: inputSlice,
        query: querySlice,
        weather: weatherSlice,
        units: unitsSlice
    },
})