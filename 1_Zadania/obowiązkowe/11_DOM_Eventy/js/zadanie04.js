    // Zadanie 04

document.addEventListener('DOMContentLoaded', start);

function start() {
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => btn.addEventListener('click', function() {
        document.querySelector('span').innerHTML++;
    }));
}