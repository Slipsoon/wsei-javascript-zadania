    // Zadanie 00

const btns = document.querySelectorAll('a');

btns.forEach(btn => {
    btn.addEventListener('click', removeOrder)
    btn.addEventListener('mouseenter', changeCursor)
});

function removeOrder() {

    const tdElements = this.parentNode.parentNode.querySelectorAll('td');

    for(let i = 0; i < tdElements.length - 1; i++)
        tdElements[i].textContent = '';
}

function changeCursor() {
    this.style.cursor = 'pointer';
}