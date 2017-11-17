'use strict';

const z = Object.freeze([4, 5, 6]);
z[0] = 1;
console.log(z);

const a = [1, 2, 4];
a[0] = 3;
console.log(a);

const double = list => {
    return list.map(n => n * 2);
};

const ori = [1, 2, 3];
const now = double(ori);

console.log(ori);
console.log(now);
