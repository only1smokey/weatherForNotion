// OpenWeather API Key (replace with your own key)
const apiKey = 'a78011d3afae77fe11fda101d28f0a84';
const city = 'Würzburg';
const country = 'DE';

// Function to format the temperature
function formatTemperature(temp) {
    return `${Math.round(temp)}°C`;
}

// Function to get the current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Function to fetch weather data
async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

// Function to update the page with weather info
async function updateWeatherInfo() {
    const weatherData = await fetchWeather();

    document.getElementById('current-time').textContent = getCurrentTime();
    document.getElementById('current-temperature').textContent = formatTemperature(weatherData.main.temp);
    document.getElementById('weather-description').textContent = weatherData.weather[0].description;
}

// Update the weather info every minute
setInterval(updateWeatherInfo, 60000);

// Initial update
updateWeatherInfo();
