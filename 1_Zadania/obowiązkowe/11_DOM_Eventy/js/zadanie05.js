    // Zadanie 05

document.addEventListener('DOMContentLoaded', start);

function start() {
    const divElements = document.querySelectorAll('div');

    divElements.forEach(div => div.addEventListener('click', function() {
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }));
}