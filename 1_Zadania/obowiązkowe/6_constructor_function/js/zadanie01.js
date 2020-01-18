var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

let firstRobot = new Robot('See-Threepio');
firstRobot.sayHi('Sebastian');
firstRobot.changeName('C-3PO');
firstRobot.fixIt();

let secondRobot = new Robot('BB-8');
secondRobot.sayHi('Sebastian');
secondRobot.changeName('R2-D2');
secondRobot.fixIt();