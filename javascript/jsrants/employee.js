class Employee {
  constructor(age, salary) {
    this._age = age;
    this._salary = salary;
  }

  get age() {
    return this._age;
  }

  get salary() {
    return this._salary;
  }

  toString() {
    return `employee of ${this._age} years old`;
  }

  valueOf() {
    return this._salary;
  }
}

module.exports = Employee;
