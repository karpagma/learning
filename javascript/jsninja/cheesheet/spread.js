let names = ['apple', 'mango', 'pineapple'];
let newnames = [...names, 'banana'];
//let newnames = names + ['banana'];

console.log(names);
console.log(newnames);

names[0] = 'orange';
console.log(names);
console.log(newnames);