
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ... Deklaracja funkcji sortArray w zasięgu globalnym
function sortArray() {

    //Twoj komentarz ...Deklaracja zmiennej points z przypisaniem wartości w postaci tablicy (array) wypełnionej elementami typu number 
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ... Wywołanie metody sort obiektu array, która w argumencie przyjmuje funkcje porównującą elementy tablicy (a,b), a następnie sortuje libczy zawarte w tablicy
    points.sort(function (a, b) {
        //Twoj komentarz ... metoda porównuje otrzymane wartości (po wykonaniu działania a-b) jeżeli wartość a < 0, wówczas wartość a przypisana jest do niższego indeksu tablicy. W przeciwnym wypadku wartość a zajmuje wyższy indeks od wartości b. Metoda sortuje elementy rosnąco.
        return a - b;
    });

    //Twoj komentarz ... zwraca wartość zmiennej points, która zawiera posortowaną tablice
    return points;
}

//Twoj komentarz ... Wywołanie wyżej zadeklarowanej funkcji sortArray, która zwraca posrtowaną tablicę.
sortArray();
