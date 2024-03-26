const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const dob = document.createElement('p');
        const placeBirth = document.createElement('p');


        const name = `${prophet.name} ${prophet.lastname}`

        fullName.textContent = name;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', name);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 272);
        portrait.setAttribute('heigth', 336);
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(placeBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};

getProphetData(url);