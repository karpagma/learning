const express = require('express');
const app = express();

async function getGreet() {
    return new Promise((resolve, reject) => {
        resolve('Hello, world!');
    });
}

app.get('/', async (req, res) => {
    const greet = await getGreet();
    res.send(greet);
});

app.listen(3000);

// for testing
module.exports.app = app;
