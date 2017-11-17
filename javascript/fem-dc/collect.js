const collect = (gen, array) => {
    return () => {
        const ret = gen();
        if (ret !== undefined) {
            array.push(ret);
        }
        return ret;
    };
};

/*let array = [];
const col = collect(fromTo(0, 2), array);
console.log(col());
console.log(col());
console.log(col());
console.log(array);*/

module.exports = collect;

