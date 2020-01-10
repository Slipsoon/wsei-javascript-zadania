    // Zadanie 02

const orders = document.querySelector('tbody');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('a');
btn.addEventListener('click', addOrder);
btn.addEventListener('mouseenter', () => { btn.style.cursor = 'pointer' });

function addOrder() {

    let newOrderDetails = new Array();
    const newRecord = document.createElement('tr');

    inputs.forEach(input => {
        newOrderDetails.push(input.value);
    });

    for (let i = 0; i <= 2; i++) {
        const newCell = document.createElement('td');
        newCell.textContent = newOrderDetails[i];
        newRecord.appendChild(newCell);
    }
    orders.appendChild(newRecord);

    inputs.forEach(input => {
        input.value = null;
    })
}

