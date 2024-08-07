# Weather Forecasting App

This Weather Forecasting App is a simple web application that allows users to get the weather forecast for a specified city using the OpenWeatherMap API. The app displays the weather data, including date, temperature, description, and an icon representing the weather conditions.

## Features

- Fetches 5-day weather forecasts for any city.
- Displays weather information such as date, temperature (in Celsius), description, and weather icons.
- Responsive layout that adjusts to different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- Fetch API for making HTTP requests
- OpenWeatherMap API for weather data

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Open the `index.html` file in your browser:**

   You can simply open the file directly in a web browser to run the app.

## Configuration

Before running the app, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api). Follow these steps:

1. Sign up or log in to your OpenWeatherMap account.
2. Navigate to the API section and generate an API key.
3. Open the `app.js` file in a text editor and replace `'ADD_YOUR_API_KEY_HERE'` with your API key:

   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

## Usage

1. Open the app in your browser.
2. Enter the name of the city you want to get the weather forecast for in the input field.
3. Click the "Get Forecast" button to display the weather forecast for the specified city.
