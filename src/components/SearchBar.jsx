import { useState } from "react";

function SearchBar({ onSearch }) {
    // State for saving user input (city name)
    const [city, setCity] = useState('');

    // Function to update state on user input
    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <section className="search-bar">
            <input 
                type="text" 
                placeholder="Enter a city..."
                value={city}
                onChange={handleInputChange}
            />
            <button onClick={() => onSearch(city)}>Search</button>
            <div>{city}</div>
        </section>
    );
}

export default SearchBar