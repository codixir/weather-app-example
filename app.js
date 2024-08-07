document.addEventListener('DOMContentLoaded', () => {
    class WeatherApp {
        constructor(API_KEY, options = {}) {
            this.API_KEY = API_KEY;
            this.units = options.units || 'metric';
        }

        initialize() {
            const form = document.querySelector('#form');
            const cityInput = document.querySelector('#city');

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const city = cityInput.value.trim();
                if (city) {
                    this.getWeather(city);
                    cityInput.value = '';
                }
            });
        }

        async getWeather(city) {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${this.units}&appid=${this.API_KEY}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                this.formatResults(data);
            } catch (error) {
                console.error('Failed to fetch weather data:', error);
            }
        }

        formatResults(data) {
            const { list } = data;
            const resultsContainer = document.querySelector('#results-container');
            resultsContainer.innerHTML = ''; // Clear previous results

            list.forEach((item) => {
                const date = item.dt_txt;
                const temp = item.main.temp;
                const description = item.weather[0].description;
                const icon = item.weather[0].icon;

                const card = document.createElement('div');
                card.classList.add('item');

                const dateContainer = document.createElement('p');
                dateContainer.textContent = date;
                card.appendChild(dateContainer);

                const tempContainer = document.createElement('p');
                tempContainer.textContent = `${temp} °C`;
                card.appendChild(tempContainer);

                const descriptionContainer = document.createElement('p');
                descriptionContainer.textContent = description;
                card.appendChild(descriptionContainer);

                const iconContainer = document.createElement('img');
                iconContainer.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                iconContainer.alt = description;
                card.appendChild(iconContainer);

                resultsContainer.appendChild(card);
            });
        }
    }

    const apiKey = 'ADD_YOUR_API_KEY_HERE';
    const options = { units: 'metric' };
    const weatherApp = new WeatherApp(apiKey, options);
    weatherApp.initialize();
});