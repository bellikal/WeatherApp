import './App.css'

import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  // State for saving weather data
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null); // Error-Handling for API-Requests

  // API-Key for OpenWeather API
  const apiKey = 'cc81ab848ca674fb42d0f331df27d8fa';

  // Function for API-Request based on entered city
  const handleSearch = (city) => {
    // API-URL with city name and API-key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetching weather data from API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json(); // Conversion of response into JSON
      })
      .then((data) => {
        setWeatherData(data); // Saving weather data in state
        setError(null); // Reset error if one occurred previously
      })
      .catch((error) => {
        setError(error.message); // Saving error-message in state
        setWeatherData(null);
      });
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      
      {weatherData && <WeatherDisplay data={weatherData} />}

      {error && <p>{error}</p>}
    </>
  )
}

export default App
