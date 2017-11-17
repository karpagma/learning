let addAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject('invalid arguments');
            }
            resolve(a + b);
        }, 1500);
    });
}

addAsync(2, 3)
    .then(result => {
        console.log('Success: ' + result);
        return addAsync(result, 10);
    }).then(msg => {
        console.log(msg);
    }).catch(err => {
        console.error('Error: ' + err);
    })