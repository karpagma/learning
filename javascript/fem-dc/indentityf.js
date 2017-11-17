const foo = arg => () => arg;

const func = foo('three');
console.log(func());
