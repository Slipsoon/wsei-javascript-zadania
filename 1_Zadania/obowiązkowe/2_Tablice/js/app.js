document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 0

    function distFromAvarage(array) {
        let averageValue = 0;
        let newArray = array;

        for (let i = 0; i < array.length; i++)
            averageValue += array[i];

        averageValue /= array.length;

        for (let i = 0; i < newArray.length; i++)
            newArray[i] -= averageValue;

        return newArray;
    }
    console.log('Zadanie 0:');
    console.log(distFromAvarage([1,2,3,4,5,6,7]));
    console.log(distFromAvarage([1,1,1,1]));
    console.log(distFromAvarage([2,8,3,7]));

    // Zadanie 1

    const favFruits = [
        'Blueberry',
        'Raspberry',
        'Strawberry',
        'Banana',
        'Orange',
        'Apple'
    ];

    console.log('Zadanie 1:');
    //1.1
    console.log(favFruits[0]);
    //1.2
    console.log(favFruits[favFruits.length - 1]);
    //1.3
    for (let i = 0; i < favFruits.length; i++)
        console.log(favFruits[i]);

    
    // Zadanie 3

    function printTable(array) {
        for (const element of array)
            console.log(element);
    }

    console.log('Zadanie 3:');
    printTable([1,2,3,4,5,6,7,8,9]);

    // Zadanie 4

    function multiply(array) {
        let result = 1;

        for (let i = 0; i < array.length; i++)
            result *= array[i];

        return result;
    }

    console.log('Zadanie 4:');
    console.log(multiply([1,2,3,4,5,6,7]));
    console.log(multiply([1,1,1,1]));
    console.log(multiply([2,8,3,7]));

    // Zadanie 5

    function getEvenAvarage(array) {
        let averageValue = 0;
        let numberOfEven = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                averageValue += array[i];
                numberOfEven++;
            }
        }

        if (averageValue != 0)
            return averageValue /= numberOfEven;
        else 
            return null;
    }

    console.log('Zadanie 5:');
    console.log(getEvenAvarage([1,2,3,4,5,6,7]));
    console.log(getEvenAvarage([1,1,1,1]));
    console.log(getEvenAvarage([2,8,3,7,4]));

    // Zadanie 6

    function sortArray(arrayNumber) {
        return arrayNumber.sort(function(a, b){return a-b});
    }

    console.log('Zadanie 6:');
    console.log(sortArray([145,11,3,64,4,6,10]));

    // Zadanie 7

    function addArrays(arrayNumber1, arrayNumber2) {
        const arrayLength = (arrayNumber1.length < arrayNumber2.length) ? arrayNumber1.length : arrayNumber2.length;
        let newArray = [];

        for (let i = 0; i < arrayLength; i++) {
            newArray.push(arrayNumber1[i] + arrayNumber2[i]);
        }

        if (arrayLength == arrayNumber1.length)
            for (let i = arrayLength; i < arrayNumber2.length; i++)
                newArray.push(arrayNumber2[i]);
        else if (arrayLength == arrayNumber2.length)
            for (let i = arrayLength; i < arrayNumber1.length; i++)
                newArray.push(arrayNumber1[i]);

        return newArray;
    }

    console.log('Zadanie 7:');
    console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
    console.log(addArrays([8,3,22], [1,3,2]));
    console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));
})