const {add, mul} = require('./funcs');

const liftf = binaryfunc => a => b => binaryfunc(a, b);

const addf = liftf(add);
const addresult = addf(2)(3);

const mulf = liftf(mul);
const mulresult = mulf(2)(3);

console.log(addresult);
console.log(mulresult);

const inc = liftf(add)(1);
const incresult = inc(5);
console.log(incresult);
