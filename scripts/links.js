const baseURL = 'https://l-gomes-ar.github.io/wdd230/';
const linksURL = 'https://l-gomes-ar.github.io/wdd230/data/links.json';

async function getLinks(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement('li');
        let content = `${week.week}: `;

        week.links.forEach((link) => {
            content += `[<a href="${link.url}">${link.title}</a>] `;
        });

        li.innerHTML = content;
        document.querySelector('ul').appendChild(li);
    });
};

getLinks(linksURL);