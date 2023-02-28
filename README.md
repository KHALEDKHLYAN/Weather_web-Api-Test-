#  Weather App
This is a simple weather app that retrieves current weather information for a given location using the OpenWeatherMap API.

  ****
  <h1>Table of Contents</h1>
  <li>Installation</li>
  <li>Usage</li>
  <li>API Key</li>
  <li>Contributing</li>
  <li>License</li>
  
  <h2>Installation</h2>    
  To use the weather app, you will need to clone the repository to your local machine:

    `git clone https://github.com/KHALEDKHLYAN/Weather_web-Api-Test-.git`

Then, open the index.html file in your web browser.

<h2>Usage</h2>

To use the weather app, simply enter the name of a city in the search box and press "Enter" or click the "Search" button. 
<p>The app will retrieve current weather information for the city and display it on the page.</p>

The app displays the following information for the city:

  <li>City name and country</li>
  <li>Current date and time</li>
  <li>Current temperature in Celsius</li>
  <li>Weather description</li>
  <li>Minimum and maximum temperature for the day</li>
  
 ![image](https://user-images.githubusercontent.com/95699811/221923340-69f9a1de-fe68-4fc6-8445-771b37c1bd0f.png)
 
<h2>API Key<h2>
  
<h5>The weather app uses the OpenWeatherMap API to retrieve weather information.</h5>
<p>To use the API, you will need to obtain an API key from the OpenWeatherMap website.<p>
 Once you have an API key, you can add it to the api object in the script.js file:

 javascript  Copy code
 
     `const api = {
        key: "YOUR_API_KEY",
        base: "https://api.openweathermap.org/data/2.5/"
      };`
      
<h5>.Replace YOUR_API_KEY with your actual API key.</h5>

Contributing
If you would like to contribute to the weather app, please open an issue or submit a pull request on GitHub.

![image](https://user-images.githubusercontent.com/95699811/221926074-8486a452-7784-4bda-8800-9ac788a18f25.png)


License
The weather app is licensed under the MIT License.
