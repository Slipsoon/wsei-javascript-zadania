    //Zadanie 01

const btns = document.querySelectorAll('a');

btns.forEach(btn => { 
    btn.addEventListener('click', ManipulateBox)
});

function ManipulateBox() {
    this.nextElementSibling.classList.toggle('hidden');
}
