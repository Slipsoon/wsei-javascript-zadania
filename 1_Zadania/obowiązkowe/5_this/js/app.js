document.addEventListener('DOMContentLoaded', () => {
        // Zadanie 0

    let car = {
        brand: 'Mercedes',
        color: 'Czarny',
        numberOfKilometers: 0,
        printCarinfo: function() {
            return String(`${car.color} ${car.brand}, ${car.numberOfKilometers}`); 
        },
        drive: function(km) {
            return this.numberOfKilometers += km;
        }
    }
    
    
    console.log(car.printCarinfo());
    car.drive(20);
    console.log(car.printCarinfo());

        // Zadanie 1
    car.inspectionDate = ['2015-01-01', '2018-01-01', '2021-01-01'];

        //1.1
    car.addNewInsepctionDate = function (date) {
        return this.inspectionDate.push(date);
    };
        //1.2
    car.showAllInspectionDates = function() { return this.inspectionDate };

        //Zadanie 3

    let stairs = {
        step: 0,
        up: function() { return this.step++ },
        down: function() { return this.step-- },
        printStep: function() { return this.step }
    }

    stairs.up();
    stairs.up();
    stairs.up();
    stairs.down(); 
    console.log(stairs.printStep()); // 2
})

