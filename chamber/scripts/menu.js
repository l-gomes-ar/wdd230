const button = document.querySelector('#menuBtn');

button.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});