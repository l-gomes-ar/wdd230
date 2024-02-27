const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

const lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modified: ${lastModified}`;