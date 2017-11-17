const express = require('express');

const app = express();

app.use((req, res, next) => {
    const minutes = (new Date()).getMinutes();
    if ((minutes % 2) === 0) {
        return next();
    }

    res.statusCode = 403;
    res.end('Not authorized');
});

app.use((req, res) => {
    res.end('Secret info: the password id "swordfish"');
});

app.listen(3000, () => {
    console.log('app listening in 3000');
});