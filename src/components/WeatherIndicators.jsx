import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilSun, UilWind, UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from './services/weatherService'

const WeatherIndicators = ({ weather: {
    humidity, feels_like, temp_min, temp_max, speed, sunrise, sunset, details, icon, temp, timezone
} }) => {
    return (
        <div>
            <div className="flex items-center justify-center text-purple-300 text-xl py-6">
                <p>{details}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
                <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        <span className="mr-1">Real feel: <span className="font-medium">{`${feels_like.toFixed()}`}°</span></span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        <span className="mr-1">Humidity: <span className="font-medium">{`${humidity.toFixed()}`}%</span></span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        <span className="mr-1">Wind: <span className="font-medium">{`${speed.toFixed()}`} km/h</span> </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center my-4 text-white">
                <div className="flex items-center">
                    <UilSun size={18} className="mr-1" />
                    <span className="text-[14px]">Rise:</span>
                    <span className="font-medium ml-1 text-[12px]"> {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </div>
                <p className="mx-1">|</p>
                <div className="flex items-center">
                    <UilSunset size={18} className="mr-1" />
                    <span className="text-[14px]">Set:</span>
                    <span className="font-medium ml-1 text-[12px]">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </div>
                <p className="mx-1">|</p>
                <div className="flex items-center">
                    <UilArrowUp size={18} className="mr-1" />
                    <span className="text-[14px]">Hight:</span>
                    <span className="font-medium ml-1 text-[12px]">{`${temp_max.toFixed()}`}°</span>
                </div>
                <p className="mx-1">|</p>
                <div className="flex items-center">
                    <UilArrowDown size={18} className="mr-1" />
                    <span className="text-[14px]">Low:</span>
                    <span className="font-medium ml-1 text-[12px]">{`${temp_min.toFixed()}`}°</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherIndicators