document.addEventListener('DOMContentLoaded', () => {

    // Zadanie 0a

    var city = {
        capital: 'Kraków',
        population: 771100,
        president: "Majchrowski",
        primeMinisters: ['Morawiecki', 'Ziobro']
    }

    console.log(city.capital);
    console.log(city.population);
    console.log(city.president);
    console.log(city.primeMinisters);

    // Zadanie 0b

    var timeMachine = {
        shape: 'Rectangle',
        model: 'Pro',
        run: function(date, place) {
            this.date = date;
            this.place = place;

            console.log(this.shape);
            console.log(this.model);
            console.log(this.date);
            console.log(this.place);
        }
    }
    timeMachine.run('05-06-1443', 'Middle Europe');

    // Zadanie 1

    var book = {
        title: 'BŁĄDZĄC PO WALL STREET',
        author: 'Malkiel Burton G.',
        numberOfPages: 373
    }

    console.log(book.title);
    console.log(book.author);
    console.log(book.numberOfPages);

    // Zadanie 2

    var person = {
        name: 'Sebastian',
        age: 25,
        sayHello: function() { console.log("hello"); }
    }

    console.log(person.name);
    console.log(person.age);
    person.sayHello();

    // Zadanie 3

    var favRecipe = {
        title: 'Chocolate Cake',
        servings: 8,
    }

    favRecipe.ingredients = ['Chocolate', 'Butter', 'Milk', 'eggs', 'sugar', 'flour', 'cacao', 'baking powder'];

    console.log(favRecipe.title);
    console.log(favRecipe.servings);
    console.log(favRecipe.ingredients);

    // Zadanie 6

    var spoon = {
        isExist: true
    }
    
    var fork = spoon;
    fork.isExist  = false;

    console.log(spoon.isExist);
})

