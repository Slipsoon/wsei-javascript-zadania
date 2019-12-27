document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);


    function innerFuncOne() {
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
      console.log("innerFuncOne: ", this);
        // Zadanie 9
      b.style.backgroundColor = "blue";
    }
    innerFuncOne();

  });
 
})

/* 
Komentarz do zadania 9:
"Potrzebujesz użyć elementu o id ```b``` wewnątrz funkcji ```innerFuncOne```, żeby zmienić mu kolor."

Odpowiedź: Poprzez odwołanie bezpośrednio do zmiennej do której przypisany jest element o id 'b'. (Przykład zamieszczony w w/w funkcji)
*/