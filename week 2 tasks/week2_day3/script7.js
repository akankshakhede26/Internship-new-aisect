// ========================================================
// Simple & Beginner-Friendly Code
// Week 2 Day 3: Asynchronous JavaScript
// Topics: setTimeout, Promises, Async/Await & Fetch
// ========================================================


// ========================================================
// Task 1 – Simulate API Call with setTimeout
// ========================================================
console.log("===== TASK 1: SIMULATE API CALL WITH SETTIMEOUT =====");

function fakeAPICall() {
  console.log("Fetching user details...");
  setTimeout(() => {
    console.log("User data received ✅");
  }, 2000);
}

// Extension: Add nested setTimeout for "Processing Data..."
function fakeAPICallWithExtension() {
  console.log("Fetching user details...");
  setTimeout(() => {
    console.log("User data received ✅");

    // Nested timeout to show step-by-step flow
    setTimeout(() => {
      console.log("Processing Data... ⚙️");

      setTimeout(() => {
        console.log("Data processed successfully! 🚀");
      }, 1000);
    }, 1000);
  }, 2000);
}

// Run Task 1
fakeAPICall();


// ========================================================
// Task 2 – Promise Example
// ========================================================
console.log("\n===== TASK 2: PROMISE EXAMPLE =====");

const simulateFetch = new Promise((resolve, reject) => {
  let isOnline = true; // Set to false to test rejection (error)
  setTimeout(() => {
    if (isOnline) {
      resolve("Data fetched successfully ✅");
    } else {
      reject("Network error ❌");
    }
  }, 1500);
});

// Consuming the promise
simulateFetch
  .then(msg => console.log(msg))
  .catch(err => console.error(err));


// ========================================================
// Task 3 – Async/Await with Fetch
// ========================================================
console.log("\n===== TASK 3: ASYNC/AWAIT WITH FETCH =====");

async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();
    console.log("Latest Posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error loading posts:", error.message || error);
  }
}

// Run Task 3
loadPosts();


// ========================================================
// Mini Challenge: "Weather Fetcher"
// ========================================================
console.log("\n===== MINI CHALLENGE: WEATHER FETCHER =====");

// Challenge Goal:
// 1. Fetches weather data from Open-Meteo
// 2. Displays temperature and wind speed
// 3. Handles errors gracefully

async function fetchWeather() {
  console.log("Fetching weather...");
  const url = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const weather = data.current_weather;

    console.log(`Current Temp: ${weather.temperature}°C`);
    console.log(`Wind Speed: ${weather.windspeed} km/h`);
    return weather;
  } catch (error) {
    console.error("Error fetching weather:", error.message || error);
    // Graceful fallback for offline / beginner demonstration
    return { temperature: 29.3, windspeed: 5.6 };
  }
}

// Run Mini Challenge
fetchWeather();


// ========================================================
// Function for Browser Button ("Run Tasks in Console")
// ========================================================
function runTasks() {
  console.clear();
  console.log("========== ASYNCHRONOUS JAVASCRIPT TASKS ==========\n");

  console.log("1. Running Task 1 (fakeAPICall):");
  fakeAPICall();

  setTimeout(() => {
    console.log("\n2. Running Task 1 Extension (fakeAPICallWithExtension):");
    fakeAPICallWithExtension();
  }, 2200);

  setTimeout(() => {
    console.log("\n3. Running Task 2 (simulateFetch):");
    simulateFetch
      .then(msg => console.log("Promise Result:", msg))
      .catch(err => console.error("Promise Error:", err));
  }, 6500);

  setTimeout(async () => {
    console.log("\n4. Running Task 3 (loadPosts):");
    await loadPosts();

    console.log("\n5. Running Mini Challenge (fetchWeather):");
    await fetchWeather();
  }, 8500);
}


// ========================================================
// Simple Browser Helper: Update Web Page Content
// ========================================================
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", async () => {
    // Fetch live weather data to update the card on the page
    try {
      const weather = await fetchWeather();
      const tempElement = document.getElementById("weather-temp");
      const windElement = document.getElementById("weather-wind");
      if (tempElement && weather) tempElement.textContent = `${weather.temperature}°C`;
      if (windElement && weather) windElement.textContent = `${weather.windspeed} km/h`;
    } catch (e) {
      // Keep initial display values if offline
    }
  });
}
