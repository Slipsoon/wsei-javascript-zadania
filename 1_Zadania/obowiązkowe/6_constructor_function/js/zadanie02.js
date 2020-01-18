 var Calculator = function () {
    this.operationKeeper = [];
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.operationKeeper.push(`added ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    this.operationKeeper.push(`
    multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    const result = num1 - num2;
    this.operationKeeper.push(`
    subtracted ${num1} from ${num2} got ${result}`);
    return result; 
}

Calculator.prototype.divide = function(num1, num2) {
    const result = num1 / num2;
    this.operationKeeper.push(`
    divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function() {
    return console.log(this.operationKeeper);
}

Calculator.prototype.clearoperations = function() {
    return this.operationKeeper.length = 0;
}

const calculator = new Calculator();
calculator.add(5,7);
calculator.multiply(25,5);
calculator.subtract(100,44);
calculator.divide(18,3);
calculator.printOperations();
calculator.clearoperations();
calculator.printOperations();