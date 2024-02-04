import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faSnowflake, faCloud, faQuestion} from "@fortawesome/free-solid-svg-icons";

export default function WeatherItem({city, temperature, weatherType, showDetails}) {

    const getWeatherIcon = (weatherType) => {
        switch (weatherType) {
            case "sunny":
                return faSun;
            case "cold":
                return faSnowflake;
            case "cool":
                return faCloud;
            default:
                return faQuestion;
        }
    };

    return (
        <div>
            {showDetails &&
                <div className='weather__item-card'>
                    <div className='weather__item-city'>{city}</div>
                    <div className='weather__item-temperature'>{temperature}</div>
                    <div className='weather__item-weatherType'>
                        <FontAwesomeIcon icon={getWeatherIcon(weatherType)}/>
                        {weatherType}
                    </div>
                </div>
            }
        </div>
    );
}
