const memberSpotlight = document.querySelector('#member-spotlight');
const url = 'https://l-gomes-ar.github.io/wdd230/chamber/data/members.json';


async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.companies);
}

function displayData(companies) {
    const companiesSilverGold = companies.filter((company) => company.membershipLevel === 'Silver' || company.membershipLevel === 'Gold');

    let randomList = [];

    const choose = (arr) => arr[Math.floor(arr.length * Math.random())];

    let company;
    for (let i = 0; i < 3; i++) {
        company = choose(companiesSilverGold);
    
        const tryPush = (company) => {
            if (!randomList.includes(company)) {
                randomList.push(company);
            } else {
                company = choose(companiesSilverGold);
                tryPush(company);
            }
        };

        tryPush(company);
    }

    randomList.forEach((company) => {
        memberSpotlight.innerHTML += `<div>
                                         <h3>${company.name}</h3>
                                         <p class="description">${company.description}</p>
                                         <p class="address">${company.address}</p>
                                         <p class="phone">${company.phone}</p>
                                     </div>`;
        
        
    });
}

fetchApi(url);