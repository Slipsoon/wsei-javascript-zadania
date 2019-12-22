    // Zadanie 06

document.addEventListener('DOMContentLoaded', start);

function start() {

    let box = document.querySelector('#box');

    box.addEventListener('mousemove', function(e) {
        document.querySelector('#globalX').innerHTML = e.clientX;
        document.querySelector('#globalY').innerHTML = e.clientY;

        document.querySelector('#localX').innerHTML = e.offsetX;
        document.querySelector('#localY').innerHTML = e.offsetY;
    });
}