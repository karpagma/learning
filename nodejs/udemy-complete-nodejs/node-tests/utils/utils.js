const add = (a,b) => {
    return a + b;
}

const asyncAdd = async (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

module.exports = { 
    add,
    asyncAdd
}
