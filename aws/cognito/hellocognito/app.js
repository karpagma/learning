$(document).ready(function() {
    AWSCognito.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:307a3b4c-d6f9-4ff3-9adb-2d89e6676d74',
    });

    $('#login').on('click', function() {
        var authenticationData = {
            Username : 'madhanganesh',
            Password : 'Pollachi@75',
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        AWSCognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'})
        
        var poolData = { 
            UserPoolId : 'us-east-1_lvr6H6M7H',
            ClientId : '70tjpc9bn37te5mccl4ecp4v84'
        };
        var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
        var userData = {
            Username : 'madhanganesh',
            Pool : userPool
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                //debugger;
                //alert('access token + ' + result.getAccessToken().getJwtToken());
                console.log(result.getAccessToken().getJwtToken());
            },

            onFailure: function(err) {
                alert(err);
            },

        });
    });

    $('#invoke').on('click', function() {
    });
});
