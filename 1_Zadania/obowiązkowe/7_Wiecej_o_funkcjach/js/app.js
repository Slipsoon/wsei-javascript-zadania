/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ... Utworzenie funkcji bezargumentowej jeden 
function jeden() {

    //Twoj komentarz ... Utworzenie zmiennej zmienna1 w zasięgu funkcji jeden wraz z przypisaniem wartości 1, która jest hoistowana na sam szczyt wewnątrz funkcji jeden z powodu deklaracji za pomocą var 
    var zmienna1 = 1;

    //Twoj komentarz ... Utworzenie zagnieżdżonej funkcji dwa wewnątrz funkcji jeden
    function dwa() {

        //Twoj komentarz ... Wypisanie z powodzeniem zmiennej1 ponieważ ta została zadeklarowana na zewnątrz funkcji dwa co sprawia, że jest widoczna wewnątrz funkcji jeden oraz w każdej zagnieżdzonej funkcji wewnątrz funkcji jeden  
        console.log(zmienna1);

        //Twoj komentarz ... Utworzenie zmiennej zmienna2 z przypisaniem wartości 3, która jest hoistowana na sam szczyt wewnątrz funkcji dwa z powodu deklaracji za pomocą var
        var zmienna2 = 3;
    }

    //Twoj komentarz ... Wywołanie zadeklarowanej wyżej funkcji dwa
    dwa();

    //Twoj komentarz ... Próba wypisania zmiennej zmienna2 - niepowodzenie ponieważ próba wypisania następuje z zewnątrz funkcji dwa. Z zewnątrz nie widać zawartości funkcji zagnieżdżonych (funkcji dwa)
    console.log(zmienna2)
}

//Twoj komentarz ... Wywołanie globalnie zadeklarowanej funkcji jeden, która wywołuje funkcje dwa
jeden()
