    // Zadanie 01

const btn = document.querySelector('a');
const list = document.querySelector('ul');
let elementCounter = 0;

btn.addEventListener('click', addElementToList);
btn.addEventListener('mouseenter', changeCursor);

function addElementToList() {

    let li = document.createElement('li');
    let elementInfo = document.createTextNode(`Element ${++elementCounter} - w chwili dodania było ${elementCounter - 1} elementów`);

    li.appendChild(elementInfo);
    list.appendChild(li);
}

function changeCursor() {
    this.style.cursor = 'pointer';
}