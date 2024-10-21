import { useState } from "react";

import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
    // State for saving user input (city name)
    const [city, setCity] = useState('');

    // State for saving filtered suggestions
    const [suggestions, setSuggestions] = useState([]);

    // Array of cities
    const cities = [
        'Berlin', 'Munich', 'Hamburg', 'Hannover', 'Frankfurt', 'Paris', 'London', 'New York', 'Tokyo', 'Sydney'
    ];

    // Function to update state on user input
    const handleInputChange = (event) => {
        const userInput = event.target.value;
        setCity(userInput);

        // Filter cities matching with input
        const filteredSuggestions = cities.filter((city) =>
            city.toLowerCase().startsWith(userInput.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    // Function to handle form submission
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(city);
        setCity(''); // Clears input field after search
        setSuggestions([]); // Clears the suggestions after submitting
    };

    // Handle clicking on a suggestion
    const handleSuggestionClick = (suggestion) => {
        setCity(suggestion);
        setSuggestions([]);
    };

    return (
        <section className="search-bar">
            <form className="search-form" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter a city..."
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit" >Search</button>

                {/* Shows dropdown-list with suggestions */}
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </section>
    );
}

export default SearchBar;