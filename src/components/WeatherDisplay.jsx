import HumidityDisplay from "./HumidityDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherConditionDisplay from "./WeatherConditionDisplay";
import WindDisplay from "./WindDisplay";

import '../styles/WeatherDisplay.css';

function WeatherDisplay({ data }) {
    return (
        <div className="">
            <div className="city-name">
                <h2>{data.name}</h2>
            </div>
            <div className="weather-display-grid">

                <div className="weather-item">
                    <TemperatureDisplay temp={data.main.temp} />
                </div>
                <div className="weather-item">
                    <WeatherConditionDisplay description={data.weather[0].description} />
                </div>
                <div className="weather-item">
                    <WindDisplay speed={data.wind.speed} direction={data.wind.deg} />
                </div>
                <div className="weather-item">
                    <HumidityDisplay humidity={data.main.humidity} />
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay;