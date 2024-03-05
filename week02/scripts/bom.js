const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value === '') {
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const del = document.createElement('button');
    
    li.innerHTML = input.value;
    del.textContent = '❌';

    li.append(del);
    list.append(li);
    
    del.addEventListener('click', () => {
        li.remove();
    });

    input.focus();
    input.value = '';
});