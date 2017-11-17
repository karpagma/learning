const Employee = require('./employee');

class Pair {
    constructor(first, second) {
        this._first = first;
        this._second = second;
    }

    get first() {
        return this._first;
    }

    get second() {
        return this._second;
    }

    toString() {
        return `${this._first} : ${this._second}`;
    }
}

const minmax = list => {
    let min = list[0];
    let max = list[0];

    for (let i=1; i<list.length; i++) {
        if (list[i] < min) min = list[i];
        if (list[i] > max) max = list[i];
    }

    return new Pair(min, max);
}

const names = ['madhan', 'swarna', 'shrishti', 'shaashvat'];
const pair = minmax(names);
console.log(pair.toString());

const numbers = [9, 8, 4, 6, 5];
const numpair = minmax(numbers);
console.log(numpair.toString());

const employees = [new Employee(24, 1000), new Employee(35, 3000), new Employee(41, 500)];
const emppair = minmax(employees);
console.log(emppair.toString());
