    // Zadanie 03

var lists = document.querySelectorAll('div');


lists.forEach(divElement => {
    divElement.addEventListener('mouseenter', ChangeListColor);
});

function ChangeListColor() {

    const liElements = this.querySelectorAll('li');
    liElements[0].style.backgroundColor = 'red';
    liElements[4].style.backgroundColor = 'blue';

    for(let i = 1; i < liElements.length - 1; i++)
        liElements[i].style.backgroundColor = 'green';
}