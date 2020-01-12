    //Zadanie 04

const cardNumberInput = document.querySelector('#name');
const cardNumberDiv = document.querySelector('.form-group');
const displayCardType = document.querySelector('#type');
var checkNextDigit = false;
let cardType;

cardNumberInput.addEventListener('keyup', validateCard);

function cardNameRecognition() {
    let cardDigit = cardNumberInput.value;

    if (cardDigit[0] == 4) {
        displayCardType.textContent = 'Visa';
        return 'Visa';
    } else if (cardDigit[0] == 5) {
        displayCardType.textContent = 'Mastercard';
        return 'Mastercard';
    } else if (cardDigit[0] == 3 && cardDigit[1] == 4 || cardDigit[1] == 7) {
        displayCardType.textContent = 'American Express';
        return 'American Express';
    } else if (cardDigit[0] == 3) {
        return true;
    }

}


function validateCard() {

    if (cardNumberInput.value == cardNumberInput.value[0]) {
        cardType = cardNameRecognition();
        checkNextDigit = cardType;
    } else if (checkNextDigit) {
        cardType = cardNameRecognition();
        checkNextDigit = false;
    }

    switch (cardType) {

        case 'Visa':
            if (cardNumberInput.value.length >= 13 && cardNumberInput.value.length <= 16) {
                cardNumberDiv.classList.remove('has-error');
                cardNumberDiv.classList.add('has-success');
            }
            else
                cardNumberDiv.classList.add('has-error');
        break;

        case 'Mastercard':
            if (cardNumberInput.value.length == 16) {
                cardNumberDiv.classList.remove('has-error');
                cardNumberDiv.classList.add('has-success');
            }
            else
                cardNumberDiv.classList.add('has-error');
        break;

        case 'American Express':
            if (cardNumberInput.value.length == 15) {
                cardNumberDiv.classList.remove('has-error');
                cardNumberDiv.classList.add('has-success');
            }
            else
                cardNumberDiv.classList.add('has-error');
        break;
    }

}


