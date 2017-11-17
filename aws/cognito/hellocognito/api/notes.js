'use strict';

var AWS = require('aws-sdk');

/**
 * function to add a new subscriber
 */
exports.add = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const RESPONSE = {
        OK: {
            statusCode: 200,
            message: 'note created successfully'
        },
        ERROR: {
            statusCode: 400,
            message: 'Something went wrong. Plese try again'
        }
    };


    var item = event.item;
    if (!item) {
        return callback(null, RESPONSE.ERROR);
    }

    var newItem = {
        TableName: 'Notes',
        Item: item
    };

    var onAdded = err => {
        if (err) {
            return callback(err);
        }
        callback(null, RESPONSE.OK);
    };


    docClient.put(newItem, onAdded);
};

/**
 * function to list all subscribers
 */
exports.list = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const RESPONSE = {
        OK: {
            statusCode: 200, 
            message: []
        },
        ERROR: {
            statusCode: 400,
            message: 'Something went wrong. Please try again.'
        }
    };

    var query = {
        TableName: 'Notes'
    };

    var done = (err, data) => {
        if (err) {
            return callback(err);
        }

        RESPONSE.OK.message = data.Items;
        callback(null, RESPONSE.OK);
    };

    docClient.scan(query, done);
};
