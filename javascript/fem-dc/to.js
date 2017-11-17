const from = require('./from');

const to = (gen, end) => {
    return () => {
        const ret = gen();
        if (ret < end) {
            return ret;
        }
        return undefined;
    };
}

/*const itr = to(from(1), 3);
console.log(itr());
console.log(itr());
console.log(itr());*/

module.exports = to;
