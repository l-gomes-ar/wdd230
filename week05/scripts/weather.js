const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=ae52103434cc485984e651ca57270156';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}

function displayResults(data) {
    currentTemp.textContent = data.main.temp;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', 'Weather icon information for Trier, Germany');
    captionDesc.textContent = `${data.weather[0].main}: ${data.weather[0].description}`;
}

apiFetch(url);