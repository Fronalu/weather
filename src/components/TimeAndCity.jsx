import React from 'react'
import { formatToLocalTime } from './services/weatherService';

const TimeAndCity = ({ weather: { dt, timezone, country, name } }) => {
    return (
        <div className="flex items-center justify-center flex-col my-6">
            <div className="text-white text-xl font-extralight">
                {formatToLocalTime(dt, timezone)}
            </div>
            <div className="text-white font-medium text-3xl mt-6">
                {`${name}, ${country}`}
            </div>
        </div>
    )
}

export default TimeAndCity;