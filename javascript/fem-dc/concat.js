const fromTo = require('./fromTo');

const concat1 = (gen1, gen2) => {
    return () => {
        let result = gen1();
        if (result === undefined) {
            result = gen2();
        }
        return result;
    }
}

const con = concat(fromTo(0, 3), fromTo(0, 2));
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con())
