'use strict';

var AWS = require('aws-sdk');

// model for email
var model = {
    email: ''
};

/**
 * function to add a new subscriber
 */
exports.add = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const RESPONSE = {
        OK: {
            statusCode: 200,
            message: 'You have successfully subscribed.'
        },
        DUPLICATE: {
            statusCode: 400,
            message: 'You are already subscribed.'
        },
        ERROR: {
            statusCode: 400,
            message: 'Something went wrong. Plese try again'
        }
    };


    var email = event.body.email;
    if (!email) {
        return callback(null, RESPONSE.ERROR);
    }

    model.email = email;

    var newItem = {
        TableName: 'Emails',
        Item: model,
        Expected: {
            email: {Exists: false}
        }
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
            message: 'Something went wronf. Please try again.'
        }
    };

    var query = {
        TableName: 'Emails'
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
