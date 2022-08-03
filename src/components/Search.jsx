import React from 'react'
import { UilSearch, UilLocationPinAlt, UilFahrenheit, UilCelsius } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../redux/slices/inputSlice'
import { setQuery } from '../redux/slices/querySlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
    const searchValue = useSelector(state => state.input.searchValue);
    const dispatch = useDispatch()

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Fetching users location.");
            navigator.geolocation.getCurrentPosition(position => {
                toast.success("Location fetched!");
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                dispatch(setQuery({ lat, lon }))
            })
        }
    }

    return (
        <div className="flex justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input onChange={(e) => dispatch(setSearchValue(e.target.value))} value={searchValue} className='capitalize h-[50px] outline-none pl-2 h-[35px] rounded w-[350px] ease-in duration-150' type="text" placeholder="Enter your city..." />
                <UilSearch onClick={() => dispatch(setQuery({ q: `${searchValue}` }))} size={35} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilLocationPinAlt onClick={handleLocationClick} size={35} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>
        </div>
    )
}

export default Search