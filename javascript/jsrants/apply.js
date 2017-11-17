const foo = (a, b) => a + b;

const goo = foo.apply(1);
console.log(goo);