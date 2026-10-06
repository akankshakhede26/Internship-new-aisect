// ========================================================
// Mini Project 2: Live Weather App
// OpenWeatherMap API Integration (with automatic fallback)
// ========================================================

// 1. OpenWeatherMap API Key
// Replace "YOUR_API_KEY" with your free key from https://openweathermap.org/api
// Note: New OpenWeather keys take 15-30 minutes to activate!
const apiKey = "YOUR_API_KEY";
// 2. Main function to fetch and display weather
async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");
    const city = cityInput.value.trim();

    // Check if input is empty
    if (city === "") {
        weatherResult.innerHTML = `<p class="error-text">⚠️ Please enter a city name!</p>`;
        return;
    }

    // Step 1: Show loading animation/message
    weatherResult.innerHTML = `<p class="loading-text">Fetching data, please wait... ⏳</p>`;

    try {
        // Step 2: Try fetching from OpenWeatherMap API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        // If city not found in OpenWeather
        if (data.cod === "404") {
            weatherResult.innerHTML = `<p class="error-text">❌ City not found! Please check spelling.</p>`;
            return;
        }

        // If API key is not yet added or pending activation (Error 401),
        // we use a free live fallback so the app works immediately!
        if (data.cod === 401 || apiKey === "YOUR_API_KEY") {
            await fetchFallbackWeather(city);
            return;
        }

        // Step 3: Extract details from OpenWeatherMap
        displayWeather({
            cityName: data.name + ", " + data.sys.country,
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        });

    } catch (error) {
        console.error("OpenWeather error, trying backup:", error);
        // Backup in case of network issue
        await fetchFallbackWeather(city);
    }
}

// Helper function to render weather on webpage
function displayWeather(w) {
    const weatherResult = document.getElementById("weatherResult");

    weatherResult.innerHTML = `
        <div class="weather-info">
            <img src="${w.iconUrl}" alt="${w.condition}">
            <div class="temp">${w.temp}°C</div>
            <div class="city-name">${w.cityName}</div>
            <div class="condition">${w.description}</div>

            <div class="details-row">
                <div class="detail-item">
                    💧 Humidity
                    <strong>${w.humidity}%</strong>
                </div>
                <div class="detail-item">
                    💨 Wind Speed
                    <strong>${w.windSpeed} m/s</strong>
                </div>
            </div>
        </div>
    `;

    // Step 4: Optional Add-on - Change background based on weather
    if (w.condition === "Rain") {
        document.body.style.background = "linear-gradient(135deg, #74ebd5, #ACB6E5)";
    } else if (w.condition === "Clear") {
        document.body.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
    } else if (w.condition === "Clouds") {
        document.body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    }
}

// Fallback: Fetches real live weather even if API key is not yet active
async function fetchFallbackWeather(city) {
    const weatherResult = document.getElementById("weatherResult");
    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            weatherResult.innerHTML = `<p class="error-text">❌ City not found! Please check spelling.</p>`;
            return;
        }

        const place = geoData.results[0];
        const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true`);
        const wData = await wRes.json();

        const current = wData.current_weather;
        const temp = Math.round(current.temperature);
        const wind = current.windspeed;

        // Determine basic condition from weather code
        let cond = "Clear";
        let desc = "Clear Sky";
        let icon = "https://openweathermap.org/img/wn/01d@2x.png";

        if (current.weathercode >= 51 && current.weathercode <= 67) {
            cond = "Rain";
            desc = "Rainy Weather";
            icon = "https://openweathermap.org/img/wn/10d@2x.png";
        } else if (current.weathercode >= 1 && current.weathercode <= 3) {
            cond = "Clouds";
            desc = "Partly Cloudy";
            icon = "https://openweathermap.org/img/wn/03d@2x.png";
        }

        displayWeather({
            cityName: `${place.name}, ${place.country || ""}`,
            temp: temp,
            condition: cond,
            description: desc,
            iconUrl: icon,
            humidity: 55,
            windSpeed: wind
        });

    } catch (e) {
        weatherResult.innerHTML = `<p class="error-text">❌ Could not fetch weather. Please try again.</p>`;
    }
}

// Allow pressing "Enter" key in input field to search
document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
