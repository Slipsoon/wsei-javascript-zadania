    // Zadanie 01

document.addEventListener('DOMContentLoaded', () => {
let number = 10;
let counter = 0;

    function countHello(number) {

        let interval = setInterval(() => {
                console.log("Hello", ++counter)

                if (counter == number)
                    clearInterval(interval);
            }, 1000)
    }
    countHello(number);
})