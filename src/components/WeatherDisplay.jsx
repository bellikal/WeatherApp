import HumidityDisplay from "./HumidityDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherConditionDisplay from "./WeatherConditionDisplay";
import WindDisplay from "./WindDisplay";

import '../styles/WeatherDisplay.css';

function WeatherDisplay({ data }) {
    return (
        <div className="weather-display-grid">
            <div class="weather-item">
                <TemperatureDisplay temp={data.main.temp} />
            </div>

            <div class="weather-item">
                <WeatherConditionDisplay description={data.weather[0].description} />
            </div>

            <div class="weather-item">
                <WindDisplay speed={data.wind.speed} direction={data.wind.deg} />
            </div>

            <div class="weather-item">
                <HumidityDisplay humidity={data.main.humidity} />
            </div>
        </div>
    )
}

export default WeatherDisplay;