document.addEventListener("DOMContentLoaded", () => {
    const countryName = 'AFGANISTAN'; 
    const restCountriesAPI = `https://restcountries.com/v3/name/${countryName}`;
    
    fetch(restCountriesAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const countryInfo = data[0];
            const capitalElement = document.getElementById('capital');
            const regionElement = document.getElementById('region');
            const latlngElement = document.getElementById('latlng');
            const nameElement = document.getElementById('name');
            const flagElement = document.getElementById('flag');
            const countryCodeElement = document.getElementById('countryCode');
            
            capitalElement.textContent = `Capital: ${countryInfo.capital}`;
            regionElement.textContent = `Region: ${countryInfo.region}`;
            latlngElement.textContent = `Lat/Lng: ${countryInfo.latlng.join(', ')}`;
            nameElement.textContent = `Name: ${countryInfo.name.common}`;
            flagElement.src = countryInfo.flags.png;
            countryCodeElement.textContent = `Country Code: ${countryInfo.cca2}`;
            
            // Use this data to fetch weather information.
            const capitalCity = countryInfo.capital[0];
            getWeatherData(capitalCity);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

function getWeatherData(city) {
    const apiKey = 'your_openweathermap_api_key';
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(weatherAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Handle the weather data from OpenWeatherMap API.
            // You can display it in your Bootstrap card or elsewhere on the page.
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
