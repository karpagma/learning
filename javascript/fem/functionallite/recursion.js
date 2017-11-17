const mul = (...args) => {
    if (args.length === 0) {
        throw new Error('invalid arguments');
    }

    if (args.length === 1) {
        return args[0];
    }
    return args[0] * mul(...args.slice(1));
};

console.log(mul(1, 2, 3));
console.log(mul(1, 2, 3, 4, 5, 6));
console.log(mul(7));
console.log(mul());
