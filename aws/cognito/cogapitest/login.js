var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUser = AmazonCognitoIdentity.CognitoUser;
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;
var AuthenticationDetails =  AmazonCognitoIdentity.AuthenticationDetails;
var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';
console.log(AWS.util.isNode());

var authenticationData = {
    Username : 'mlv122',
    Password : 'password'
};
var authenticationDetails = new AuthenticationDetails(authenticationData);
var poolData = { 
        UserPoolId : 'us-east-1_udkvEzpTb', // Your user pool id here
        ClientId : '7q41g3jhhq8bf3jsm894qhaeql' // Your client id here
};
var userPool = new CognitoUserPool(poolData);
var userData = {
    Username : 'mlv122',
    Pool : userPool
};
var cognitoUser = new CognitoUser(userData);
console.log('authenticating...');
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId : 'us-east-1:a9764e3e-beab-4885-bcc9-785243418c37', // your identity pool id here
            Logins : {
                // Change the key below according to the specific region your user pool is in.
                'cognito-idp.us-east-1.amazonaws.com/us-east-1_udkvEzpTb' : result.getIdToken().getJwtToken()
            }
        });

        // Instantiate aws sdk service objects now that the credentials have been updated.
        // example: var s3 = new AWS.S3();

    },

    onFailure: function(err) {
        console.error(err);
    }

});

