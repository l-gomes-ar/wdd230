const bannerElement = document.querySelector('.banner');
const bannerBtn = document.querySelector('.banner span');

const currentDate = new Date();

// Valid days of the week for banner: Mon, Tue, Wed. getDay() [1, 2, 3]
const validDays = [1, 2, 3];

if (validDays.includes(currentDate.getDay())) {
    bannerElement.classList.add('open');
}

bannerBtn.addEventListener('click', () => {
    bannerElement.classList.remove('open');
});