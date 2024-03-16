const message = document.querySelector('#message');
let lastVisited = localStorage.getItem('lastVisited') || 0;
const aDay = 8.64e+7;
const currentDate = new Date(Date.now());
const lastVisit = (lastVisited !== 0) ? new Date(Number(lastVisited)) : 0;

if (lastVisited === 0) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else if ((currentDate - lastVisit) < aDay) {
    message.textContent = "Back so soon! Awesome!";
} else {
    let difference = Math.round((currentDate - lastVisit) / aDay);

    if (difference === 1) {
        message.textContent = "You last visited 1 day ago."
    } else {
        message.textContent = `You last visited ${difference} days ago.`
    }
}

localStorage.setItem('lastVisited', Date.now());