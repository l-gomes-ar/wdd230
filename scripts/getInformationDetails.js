let numberVisits = Number(localStorage.getItem('numberVisits')) || 0;
numberVisits++;
localStorage.setItem('numberVisits', numberVisits);

document.querySelector('#numberVisits').textContent = numberVisits;

const weatherInfo = document.querySelector('#weatherInfo');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.55&lon=-0.31&units=metric&appid=ae52103434cc485984e651ca57270156';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}

function displayResults(data) {
    const para = document.createElement('p');
    para.textContent = `${data.main.temp}°C - ${data.weather[0].main}`;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', 'Weather icon information for Wembley, GB');

    weatherInfo.appendChild(weatherIcon);
    weatherInfo.appendChild(para);
}

apiFetch(url);