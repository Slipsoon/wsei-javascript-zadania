    // Zadanie 00

const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const pass1Input = document.querySelector('#pass1');
const pass2Input = document.querySelector('#pass2');
const agreeCheckbox = document.querySelector('#agree');
const postBtn = document.querySelector('button');
const errorMsg = document.querySelector('.error-message');


postBtn.addEventListener('click', ValidateForm);

function ValidateForm(e) {

    let manipulateDefault = false;
    const checkEmailInput = emailInput.value.includes('@');

    if (!checkEmailInput) {
        errorMsg.textContent = 'Email musi posiadać znak @';
    } else if (nameInput.value.length <= 6) {
        errorMsg.textContent = 'Twoje imię jest za krótkie';
    } else if (surnameInput.value.length <= 6) {
        errorMsg.textContent = 'Twoje nazwisko jest za krótkie';
    } else if (!pass1Input.value || pass1Input.value != pass2Input.value ) {
        errorMsg.textContent = 'Hasła nie są takie same lub puste';
    } else if (!agreeCheckbox.checked) {
        errorMsg.textContent = 'Musisz zaakceptować warunki';
    } else
        manipulateDefault = true;

    if(!manipulateDefault)
        e.preventDefault();
}