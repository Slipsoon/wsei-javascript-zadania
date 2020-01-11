    //Zadanie 04

const btn = document.querySelector('a');
const liElements = document.querySelectorAll('li');

btn.addEventListener('click', removeElements);

function removeElements() {
    liElements.forEach(liElement => {
        liElement.parentNode.removeChild(liElement);
    })
}