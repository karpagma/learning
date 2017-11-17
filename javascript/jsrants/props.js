var one = {
    name: 'jack',
    age: 50
};

var two = Object.assign({}, one);
//Object.create(one);
one.age = 52;

console.log(two.age);