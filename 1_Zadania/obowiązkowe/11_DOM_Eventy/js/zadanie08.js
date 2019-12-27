    // Zadanie 8

let windowHeight = document.querySelector('#windowHeight');
let windowWidth = document.querySelector('#windowWidth');

window.addEventListener('resize', function(e) {
    windowHeight.innerHTML = e.target.innerHeight;
    windowWidth.innerHTML = e.target.innerWidth;
})