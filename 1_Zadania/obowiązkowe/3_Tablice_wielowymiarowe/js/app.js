document.addEventListener('DOMContentLoaded', () => {

        // Zadanie 0

    var arr = [
        [11, 12],
        [42, 2],
        [-4, -120],
        [0, 0],
        [1, 34],
    ];

    function checkArray(array) {
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            let even = true;

            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] % 2 == 1) {
                    newArray.push(false);
                    even = false;
                    break;
                }
            }

            if (even)
                newArray.push(true);
        }

        return newArray;
    }
    console.log('Zadanie 0');
    console.log(checkArray(arr));

        // Zadanie 1

    var task1Array = [ 
        [2, 3],
        ["Ala", "Ola"],
        [true, false],
        [5, 6, 7, 8],
        [12, 15, 67]
    ];

    console.log('Zadanie 1');
    //1.1
    console.log(task1Array[3][2]);
    //1.2
    console.log(task1Array[1].length);
    //1.3
    console.log(task1Array[4][2]);

        // Zadanie 2

    var task2Array = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    console.log('Zadanie 2');
    console.log(task2Array);
        //2.1
    for (let i = 0; i < task2Array.length; i++)
        console.log(task2Array[i]);
        //2.2
    for (let i = 0; i < task2Array.length; i++)
            console.log(task2Array[i].length)
        //2.3
    for (let i = 0; i < task2Array.length; i++)
        for (let j = 0; j < task2Array[i].length; j++)
            console.log(task2Array[i][j]);


        // Zadanie 3
    console.log('Zadanie 3');

    function print2DArray(array) {
        for(let i = 0; i < array.length; i++)
            for(let j = 0; j < array[i].length; j++)
                console.log(array[i][j]);
    }

    print2DArray([[1,2], [3,4]]);

        // Zadanie 4
    console.log('Zadanie 4:')

    const twoDimensionArray = [
        [5, 84, 37],
        [14, 111, 22],
        [3],
        [18, 81, 118, 2048, 256, 64]
    ]

    print2DArray(twoDimensionArray);

        // Zadanie 5

    function create2DArray(rows, columns) {
        let numbers = 1;
        let newArray = new Array(rows);

        for (let i = 0; i < newArray.length; i++)
            newArray[i] = [];

        for (let i = 0; i < newArray.length; i++) 
            for (let j = 0; j < columns; j++)
                newArray[i][j] = numbers++;
            
        return newArray;
    }

    console.log('Zadanie 5');
    console.log(create2DArray(4,4));
})

