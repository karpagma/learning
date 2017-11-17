const foo = (a, b) => () => a + b;

const x = foo(3, 4);
console.log(x());
console.log(x());
