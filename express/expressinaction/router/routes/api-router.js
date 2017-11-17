var express = require('express');
var api = express.Router();

var ALLOWED_IPS = [
    '::ffff:3.204.173.167'
];

api.use((req, res, next) => {
    if (!!ALLOWED_IPS.find(ip => ip === req.ip)) {
        next();
    } else {
        res.status(401).send('Not Authorized');
    }
});

api.get('/users', (req, res) => {
    res.json([{name: 'madhan'}, {name: 'Praveen'}]);
});

module.exports = api;
