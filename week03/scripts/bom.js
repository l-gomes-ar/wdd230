const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach((chapter) => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value === '') {
        input.focus();
        return;
    }

    displayList(input.value);
    chapterArray.push(input.value);

    setChapterList();

    input.value = '';
    input.focus();
});

function displayList(item) {
    const li = document.createElement('li');
    const del = document.createElement('button');

    li.innerHTML = item;
    del.textContent = '❌';

    li.append(del);
    list.append(li);

    del.addEventListener('click', () => {
        li.remove();
        deleteChapter(item);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem('FavBOMList', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('FavBOMList'));
}

function deleteChapter(chapter) {
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}