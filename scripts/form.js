const fb = document.querySelector('#feedback');
const pw = document.querySelector('#password');
const pwConfirmation = document.querySelector('#passwordConfirmation');
const rangeValue = document.querySelector('#rangeValue');
const rangeInput = document.querySelector('#pageRating');

pwConfirmation.addEventListener('focusout', checkpasswords);

function checkpasswords() {
    if (pw.value !== pwConfirmation.value) {
        pw.value = '';
        pwConfirmation.value = '';
        pw.focus();
        fb.textContent = "Passwords must match!";
    } else {
        fb.textContent = '';
    }
}

rangeInput.addEventListener('change', displayRange);
rangeInput.addEventListener('input', displayRange);

function displayRange() {
    rangeValue.textContent = rangeInput.value;
}