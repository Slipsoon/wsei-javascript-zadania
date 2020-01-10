    // Zadanie 02

const btns = document.querySelectorAll('a');

btns.forEach(btn => {
    btn.addEventListener('click', ManipulateBox);
});

function ManipulateBox() {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentNode.style.backgroundColor = randomColor;
}