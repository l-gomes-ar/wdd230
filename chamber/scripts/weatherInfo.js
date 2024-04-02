const weatherCard = document.querySelector('#weather-card');
const weatherForecast = document.querySelector('#forecast-card');
const apiKey = 'ae52103434cc485984e651ca57270156';
const lat = '51.55';
const lon = '-0.31';

async function weatherApiFetch(url, f) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            f(data);
        } else {
            throw Error(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}

function displayCurrentWeather(data) {
    const currentWeather = document.createElement('div');
    currentWeather.setAttribute('class', 'current-weather');

    const para = document.createElement('p');
    para.textContent = `${Math.round(data.main.temp)}°C - ${data.weather[0].main}`;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', 'Weather icon information for Wembley, GB');

    currentWeather.appendChild(weatherIcon);
    currentWeather.appendChild(para);

    weatherCard.appendChild(currentWeather);
}

function displayForecast(data) {
    const forecastDay1 = data.list.filter((item) => new Date(item.dt_txt).toLocaleDateString() === new Date(Number(Date.now()) + 8.64e+7).toLocaleDateString());
    const temperaturesDay1 = forecastDay1.map((item) => item.main.temp);
    const date1 = new Date(forecastDay1[0].dt_txt);

    const forecastDay2 = data.list.filter((item) => new Date(item.dt_txt).toLocaleDateString() === new Date(Number(Date.now()) + (8.64e+7) * 2).toLocaleDateString());
    const temperaturesDay2 = forecastDay2.map((item) => item.main.temp);
    const date2 = new Date(forecastDay2[0].dt_txt);

    const forecastDay3 = data.list.filter((item) => new Date(item.dt_txt).toLocaleDateString() === new Date(Number(Date.now()) + (8.64e+7) * 3).toLocaleDateString());
    const temperaturesDay3 = forecastDay3.map((item) => item.main.temp);
    const date3 = new Date(forecastDay3[0].dt_txt);

    const forecastArray = [
        {
            date: date1.toLocaleDateString('en-UK', {month: 'short', day: '2-digit', year: 'numeric'}),
            min: Math.round(temperaturesDay1.reduce((a, b) => Math.min(a, b))),
            max: Math.round(temperaturesDay1.reduce((a, b) => Math.max(a, b)))
        },
        {
            date: date2.toLocaleDateString('en-UK', {month: 'short', day: '2-digit', year: 'numeric'}),
            min: Math.round(temperaturesDay2.reduce((a, b) => Math.min(a, b))),
            max: Math.round(temperaturesDay2.reduce((a, b) => Math.max(a, b)))
        },
        {
            date: date3.toLocaleDateString('en-UK', {month: 'short', day: '2-digit', year: 'numeric'}),
            min: Math.round(temperaturesDay3.reduce((a, b) => Math.min(a, b))),
            max: Math.round(temperaturesDay3.reduce((a, b) => Math.max(a, b)))
        }
    ];

    forecastArray.forEach((forecast) => {
        const container = document.createElement('div');

        container.innerHTML += `<h3>${forecast.date}</h3>
                               <p>Min: ${forecast.min}°C</p>
                               <p>Max: ${forecast.max}°C</p>`

        weatherForecast.appendChild(container);
    });

}

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


weatherApiFetch(weatherUrl, displayCurrentWeather);
weatherApiFetch(forecastUrl, displayForecast);