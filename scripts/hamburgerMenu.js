const button = document.querySelector('#menuBtn');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
});