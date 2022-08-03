import React from 'react'
import { iconUrlFromCode } from './services/weatherService'

const Forecast = ({ title, items }) => {
    return (
        <div className="mt-6">
            <div className="flex items-center justify-start">
                <p className="font-medium text-white uppercase">
                    {title}
                </p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                {item.title}
                            </p>
                            <img className="w-12 my-1" src={iconUrlFromCode(item.icon)} alt="" />
                            <p className="font-medium text-4">{item.temp.toFixed()}°</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Forecast