    //Zadanie 03

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const table = document.querySelector('tbody');

btn.addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();

    if (inputs[0].value == inputs[2].value) {
        console.log('Obie drużyny muszą być różne');
        return false;
    } else if (inputs[1].value < 0 || inputs[3].value < 0) {
        console.log('Liczba goli powinna być nieujemna.');
        return false;
    } else
        addNewRecord();
}

function addNewRecord() {
    const tr = document.createElement('tr');

    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');

        if (i == 1)
            td.textContent = inputs[2].value;
        else if (i == 2)
            td.textContent = `${inputs[1].value} - ${inputs[3].value}`;
        else
            td.textContent = inputs[i].value;

        tr.appendChild(td);
    }
    table.appendChild(tr);
}