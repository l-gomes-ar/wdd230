const darkBtn = document.querySelector('#darkBtn');

darkBtn.addEventListener('click', () => {
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('h1').classList.toggle('dark');
    document.querySelector('nav').classList.toggle('dark');
    document.querySelectorAll('section').forEach((section) => {
        section.classList.toggle('dark');
    });
    document.querySelectorAll('h2').forEach((h2) => {
        h2.classList.toggle('dark');
    });
});