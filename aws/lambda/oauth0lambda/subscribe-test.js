/* eslint-disable no-console */
var awsMock = require('aws-sdk-mock');
var subscribe = require('./subscribe');

awsMock.mock('DynamoDB.DocumentClient', 'put', function(params, callback){
    console.log('comig here...');
    callback(null, 'test');
});

subscribe.add({body: {email: 'm1@g'}}, null, (err, obj) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.stringify(obj));
});

/*subscribe.list(null, null, (err, data) => {
    console.log(JSON.stringify(data));
});*/

