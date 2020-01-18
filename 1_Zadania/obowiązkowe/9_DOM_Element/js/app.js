document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
    // Zadanie 0

    function getDatasInfo(elements) {
        let newArray = [];

        for(let i = 0; i < elements.length; i++)
            newArray.push(elements[i].dataset.color);

        return newArray;
    }

    console.log(getDatasInfo(links));

    // Zadanie 1

    console.log(homeElement);

    console.log(childElements);
    for (let i = 0; i < childElements.length; i++) {
        console.log(childElements[i].nodeName);
        console.log(childElements[i].className);
    }

    console.log(banner);
    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].nodeName);
        console.log(blocks[i].className);
    }

    for (let i = 0; i < links.length; i++) {
        console.log(links[i].nodeName);
        console.log(links[i].className);
    }

    // Zadanie 2

    blocks.forEach(block => {
        console.log(block.innerHTML);
        console.log(block.outerHTML);
    })

    // Właściwość outerHTML różni się tym, że wypisuje również element HTML, a nie samą zawartość (to co wewnątrz elementu) jak w przypadku innerHTML.

    blocks.forEach(block => {
        block.innerHTML = 'Nowa wartość diva o klasie blocks';
    })

    // Zadanie 3

    const mainFooterElement = document.querySelector('#mainFooter');

    function getId(element) {
        const result = element.id
        return result; 
    }
    console.log(getId(mainFooterElement));

    // Zadanie 4

    function getTags(elements) {
        let newArray = [];

        for (let i = 0; i < elements.length; i++)
            newArray.push(elements[i].nodeName);

        return newArray;
    }
    console.log(getTags(childElements));

    // Zadanie 5

    function getClassInfo(element) {
        let array = [];

        for (elementClassName of element.classList)
            array.push(elementClassName);

        return array;
    }

    console.log(getClassInfo(banner));

    // Zadanie 6

    const allLiElementsNavTag = document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        elements.forEach(element => {
            if (element.getAttribute('data-direction') === null)
                element.setAttribute('data-direction', 'top');
        })
    }

    setDataDirection(allLiElementsNavTag);
});
