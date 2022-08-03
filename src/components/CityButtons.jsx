import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from '../redux/slices/querySlice';

const CityButtons = () => {

    const dispatch = useDispatch()

    const cities = useSelector(state => state.cities.cities);

    return (
        <div className="flex align-center justify-around">
            {cities.map(city => {
                return (
                    <div onClick={() => dispatch(setQuery({ q: `${city.name}` }))} key={city.id} className="cursor-pointer font-medium text-white">{city.name} </div>
                )
            })}
        </div>
    )
}

export default CityButtons