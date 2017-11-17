/* eslint-disable no-console */
var awsMock = require('aws-sdk-mock');
var notes = require('./notes');

var note = {
    userId: 'madhan', 
    noteId: 'n1', 
    note: 'this is test note'
};

awsMock.mock('DynamoDB.DocumentClient', 'put', function(params, callback){
    callback(null, 'test');
});

awsMock.mock('DynamoDB.DocumentClient', 'scan', function(params, callback){
    callback(null, {Items: [note]});
});

var event = {
    Item: note
};

notes.add(event, null, function(err) {
    if (err) {
        console.error(err);
    }
});

notes.list(null, null, (err, message) => {
    console.log(JSON.stringify(message));
});
