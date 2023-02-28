// Define the API key and base URL for the OpenWeatherMap API
const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"
};

// Select the search box element and attach an event listener to it
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

// This function sets the query parameter and calls the getResults function if Enter key is pressed
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

// This function makes a fetch request to the OpenWeatherMap API and calls the displayResults function
function getResults(query) {
  // Use the fetch API to get the weather data for the user's query
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      // Convert the response to JSON and return it
      return weather.json();
    })
    .then(displayResults);
}

// This function takes the weather data and displays it on the HTML document
function displayResults(weather) {
  console.log(weather);
  // Select the element with the class "location" and update the text to show the city and country
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  // Create a new Date object and select the element with the class "date", updating it with the current date
  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  // Select the element with the class "temp" and update it with the current temperature
  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  // Select the element with the class "weather" and update it with the current weather condition
  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  // Select the element with the class "hi-low" and update it with the high and low temperatures for the day
  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
}

// This function takes a date object and returns a formatted string showing the date and time
function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // Get the day of the week, date, month, and year from the date object
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  // Return a string showing the date and time in the specified format
  return `${day} ${date} ${month} ${year}`;
}
