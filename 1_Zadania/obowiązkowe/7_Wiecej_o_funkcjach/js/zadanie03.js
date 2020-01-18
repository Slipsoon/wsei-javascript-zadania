// Funkcja wykonuje się niezależnie od miejsca wywołania
sayHello();

function sayHello() {
    console.log("Cześć");
}

sayHello();

sayWelcome();
// W tym przypadku następuje próba wywołania wyrażenia funkcyjnego przed inicjalizacją zmiennej (wywołanie nie widzi zmiennej sayWelcome) co powoduje błąd wywołania. W przypadku deklaracji zmiennej za pomocą var zmienna sayWelcome będzie widoczna dla wywołania przed deklaracją, aczkolwiek zawartość zmmiennej (przypisana funkcja) już nie.

const sayWelcome = function () {
    console.log("Witaj");
}

sayWelcome();