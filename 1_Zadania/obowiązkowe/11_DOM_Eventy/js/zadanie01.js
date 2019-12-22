    // Zadanie 1

    // 1.1
// Przeniesiony tag <script> do sekcji head sprawia, że najpierw wywoływany jest kod JS, a dopiero potem wczytywana jest struktura HTML. Świadczy o tym np. Błąd, który powstał w konsoli ponieważ skrypt nie widzi elementu id menu w strukturze html w czasie wykonywania skryptu.

    // 1.2
document.addEventListener('DOMContentLoaded', start);

function start() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
}
    // Odpowiedź do zadania: Tak sytuacja została opanowana :) - Ponieważ za pomocą DOMContentLoaded najpierw wczytujemy strukture DOM, a dopiero po wczytaniu w/w struktury odpalana jest funkcja w której mieści się nasz kod.

    // 1.3
    // Odpowiedź do zadania: Generalnie różnicy nie ma - nasłuchiwanie jest zbędne ponieważ skrypt uruchamia się po wczytaniu struktury DOM
