    // Zadanie 03

const btn = document.querySelector('a');

btn.addEventListener('click', removeBtn);

function removeBtn() {
    btn.parentNode.removeChild(btn);
}