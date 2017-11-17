const fromTo = require('./fromTo');

const element = (arr, gen) => {
    if (gen === undefined) {
        gen = fromTo(0, arr.length);
    }
    return () => {
        const index = gen();
        if (index !== undefined) {
            return arr[index];
        }
    }
};

/*const ele = element(['a', 'b', 'c']);//, fromTo(1, 3));
console.log(ele());
console.log(ele());
console.log(ele());*/

module.exports = element;
