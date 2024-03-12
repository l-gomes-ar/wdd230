let numberVisits = Number(localStorage.getItem('numberVisits')) || 0;
numberVisits++;
localStorage.setItem('numberVisits', numberVisits);

document.querySelector('#numberVisits').textContent = numberVisits;