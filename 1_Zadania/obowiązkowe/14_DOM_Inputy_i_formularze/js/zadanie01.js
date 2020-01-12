    // Zadanie 01

const invoiceForm = document.querySelector('#invoiceData');
const invoiceBtn = document.querySelector('#invoice');

invoiceBtn.addEventListener('click', showForm);

function showForm() {
    invoiceForm.classList.toggle('hidden');
}

showForm();