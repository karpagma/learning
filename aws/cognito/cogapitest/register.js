var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

AWS.config.region = 'us-east-1';

var poolData = { 
        UserPoolId : 'us-east-1_udkvEzpTb', // Your user pool id here
        ClientId : '7q41g3jhhq8bf3jsm894qhaeql' // Your client id here
};

var userPool = new CognitoUserPool(poolData);    
var attributeList = [];

var dataEmail = {
        Name : 'email',
        Value : 'email@mydomain.com'
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
     attributeList.push(attributeEmail);

console.log('calling signup..');
userPool.signUp('mlv122', 'password', attributeList, null, function(err, result){
    if (err) {
        return console.error(err);
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});

