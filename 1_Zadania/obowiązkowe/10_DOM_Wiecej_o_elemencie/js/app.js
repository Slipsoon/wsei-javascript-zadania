document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // Zadanie 0

     // 0.1
     const divElement = document.querySelector('div.exercise.ex5');
     const evenLiElements = divElement.querySelectorAll('li:nth-child(2n)');
     evenLiElements.forEach(addGreenBackground);

     function addGreenBackground(li) {
         li.style.backgroundColor = "green";
     }

     // 0.2
     divElement.querySelector('li:nth-child(5)').classList.add('big');

     // 0.3
     const everyThirdElement = divElement.querySelectorAll('li:nth-child(3n)');
     everyThirdElement.forEach(function(li) {
        li.style.textDecoration = "underline";
     });

    // Zadanie 1
     
    // 1.1
    const chromeImg = document.querySelector('.chrome').style.backgroundImage = "url('./assets/img/chrome.png')";
    const edgeImg = document.querySelector('.edge').style.backgroundImage = "url('./assets/img/edge.png')";
    const firefoxImg = document.querySelector('.firefox').style.backgroundImage = "url('./assets/img/firefox.png')";

    // 1.2
    const firstExTopDiv = document.querySelector('div.exercise.ex1');
    firstExTopDiv.querySelector('div a').textContent = "Chrome";

    firstExTopDiv.querySelector('a[href="www.github.pl"]').setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');

    firstExTopDiv.querySelector('div:last-child a').textContent = "Firefox";
    firstExTopDiv.querySelector('a[href="wwwp.wp.pl"]').setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');

    // 1.3
    document.querySelector('.chrome').style.width = '100px';

    /* Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. Zastanów się, dlaczego dopisywany jest w tym miejscu.
    Napisz odpowiedź na to pytanie w komentarzu do zadania.

    Odpowiedź:
    Ponieważ jest to kod CSS, który dodawany jest bezpośrednio do elementu. 
    Style dodane w ten sposób nazywane są liniowymi stylami */

    // Zadanie 2

    // 2.1
    const nameSpan = document.querySelector('span#name');
    const fav_colSpan = document.querySelector('span#fav_color');
    const fav_mealSpan = document.querySelector('span#fav_meal');

    // 2.2
    nameSpan.innerHTML = "Sebastian Ślipek"; 
    fav_colSpan.innerHTML = "Niebieski";
    fav_mealSpan.innerHTML = "Pizza";

    // Zadanie 3

    // 3.1
    const thirdExUlElement = document.querySelector('div.exercise.ex3 ul').classList.add('menu');

    // 3.2
    const thirdExDivElement = document.querySelector('div.exercise.ex3')
    thirdExDivElement.querySelectorAll('li').forEach(liElement => {
        liElement.classList.add('menuElement');
    });

    // 3.3
    thirdExDivElement.querySelectorAll('li').forEach(function(liElement) {
        liElement.classList.remove('error');
    });

    // Zadanie 4

    // 4.1
    const fourthExLiElements = document.querySelectorAll('div.exercise.ex4 li');
    const AssignAttributeToLiElements = function() {
        for (let i = 0; i < fourthExLiElements.length; i++) {
            fourthExLiElements[i].setAttribute('data-id', `${i}`);
        }
    }
    AssignAttributeToLiElements();
});