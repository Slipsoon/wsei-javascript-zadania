document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     // Zadanie 0

     const classElTitle = document.querySelector('.title');
     function getDataAnimation(element) {
        const newValue = element.dataset.animation;
        return newValue;
     }
     console.log(getDataAnimation(classElTitle));

     // Zadanie 1

     const elementIdHome = document.querySelector('#home');
     const firstLiDataDirectionEl = document.querySelector('li[data-direction]');
     const firstElClassBlock = document.querySelector('.block');

     // Zadanie 2

     const allLiElementsInTagNav = document.querySelectorAll('nav li');
     const allPElementsInDivElements = document.querySelectorAll('div p');
     const allDivsInArticleTag = document.querySelectorAll('article div');

     console.log(allLiElementsInTagNav);
     console.log(allPElementsInDivElements);
     console.log(allDivsInArticleTag);

     // Zadanie 3

     const articleFirstClassElement = document.querySelector('article.first');
     console.log(articleFirstClassElement);
     let h1Elements = articleFirstClassElement.getElementsByTagName('h1');
     console.log(h1Elements.length);
});
