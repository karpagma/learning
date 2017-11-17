var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: 'Movies',
    KeySchema: [
        {AttributeName: 'year', KeyType: 'HASH'},
        {AttributeName: 'title', KeyType: 'RANGE'}
    ],
    AttributeDefinitions: [
        {AttributeName: 'year', AttributeType: 'N'},
        {AttributeName: 'title', AttributeType: 'S'}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log(JSON.stringify(err, null, 2));
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
