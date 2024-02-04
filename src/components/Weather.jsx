import WeatherItem from "./WeatherItem";
import {useState} from "react";

export default function Weather() {
    const [isFahrenheit, setIsFahrenheit] = useState(true);
    const [showDetails, setShowDetails] = useState(false);


    const array = [{
        cityName: 'Paris', temperatureCelsius: 22, temperatureFahrenheit: 71.6, weatherType: 'sunny'
    }, {
        cityName: 'Moscow', temperatureCelsius: 10, temperatureFahrenheit: 50, weatherType: 'cold'
    }, {
        cityName: 'Almaty', temperatureCelsius: 22, temperatureFahrenheit: 41, weatherType: 'cool'
    }, {
        cityName: 'Astana', temperatureCelsius: 15, temperatureFahrenheit: 59, weatherType: 'cold'
    },]


    const handleToggleUnits = () => {
        setIsFahrenheit((prevValue) => !prevValue);
    };

    const handleToggleDetails = () => {
        setShowDetails((prevValue) => !prevValue);
    };

    return (<div className={'weather'}>
            <button className={isFahrenheit ? 'weather__button-show' : 'weather__button-hide'}
                    onClick={handleToggleUnits}>
                {isFahrenheit ? 'Градусы Цельсия' : 'Градусы по Фаренгейту'}
            </button>
            <button className={showDetails ? 'weather__button-show' : 'weather__button-hide'}
                    onClick={handleToggleDetails}>
                {showDetails ? 'Скрыть' : 'Показать'}
            </button>

            {array.map((item, index) => (<WeatherItem
                    key={index}
                    city={item.cityName}
                    temperature={isFahrenheit ? item.temperatureFahrenheit : item.temperatureCelsius}
                    weatherType={item.weatherType}
                    showDetails={showDetails}
                />))}
        </div>);

}