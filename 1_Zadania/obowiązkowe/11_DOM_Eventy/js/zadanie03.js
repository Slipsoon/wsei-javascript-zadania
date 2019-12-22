    // Zadanie 3

document.addEventListener('DOMContentLoaded', start);

function start() {

    const btn1 = document.querySelector('#button1');
    const btn2 = document.querySelector('#button2');
    const btn3 = document.querySelector('#button3');

    btn1.addEventListener('click', function() {
        btn1.nextElementSibling.querySelector('span').innerHTML++;
    })

    btn2.addEventListener('click', function() {
        btn2.nextElementSibling.querySelector('span').innerHTML++;
    })

    btn3.addEventListener('click', function() {
        btn3.nextElementSibling.querySelector('span').innerHTML++;
    })
}