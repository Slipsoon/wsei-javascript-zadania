document.addEventListener('DOMContentLoaded', () => {
    console.log('Działa');

    const prev = document.querySelector('#prevPicture');
    const next = document.querySelector('#nextPicture');
    const liElements = document.querySelectorAll('li');
    let liElementsArray = [];
    let elementIndex = 0;

    for (let i = 0; i < liElements.length; i++) {
        liElementsArray.push(liElements[i]);
    }

    for (elementIndex = 0; elementIndex < liElementsArray.length; elementIndex++)
        console.log(elementIndex, findElementByIndex(elementIndex));
        
    findElementByIndex(0).classList.add('visible');

    prev.addEventListener('click', () => {
        moveToPrevImage();
    })

    next.addEventListener('click', () => {
        moveToNextImage();
    })

    // 7. Zmienna elementIndex wykracza poza indeks tablicy.

    function findElementByIndex(index) {
        elementIndex = index;
        return liElementsArray[elementIndex];
    }

    function moveToPrevImage() {
        liElementsArray[elementIndex].classList.toggle('visible');
        elementIndex > 0 ? elementIndex-- : elementIndex = 5;
        liElementsArray[elementIndex].classList.toggle('visible');
    }

    function moveToNextImage() {
        liElementsArray[elementIndex].classList.toggle('visible');
        elementIndex < 5 ? elementIndex++ : elementIndex = 0;
        liElementsArray[elementIndex].classList.toggle('visible');
    }
})

