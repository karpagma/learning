AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:307a3b4c-d6f9-4ff3-9adb-2d89e6676d74',
    Logins: {
      'cognito-idp.us-east-1.amazonaws.com/us-east-1_XXXXXXXXX': JSON.parse(localStorage.getItem('token'))
    }
});

$(document).ready(function(){
  updateAuthenticationStatus();
  loadAdmin();
});
function logout(){
  localStorage.clear();
  window.location = '/';
};

function updateAuthenticationStatus(){
  $('#user').empty();
  $('#login').empty();
  var user = localStorage.getItem('token');
  if(user){
    $('#user').show().append('<a onclick="logout()">Log out</a>');
    $('#login').hide();
  } else {
    $('#login').show().append('<a href="/login.html">Log in</a>');
    $('#user').hide();
  }
}

function loadAdmin(){
  if(window.location.pathname == '/admin/'){
    if(localStorage.getItem('token')){
      AWS.config.credentials.get(function (err) {
        var client = apigClientFactory.newClient({
          accessKey: AWS.config.credentials.accessKeyId, 
          secretKey: AWS.config.credentials.secretAccessKey, 
          sessionToken: AWS.config.credentials.sessionToken,
          region: 'us-east-1'  
        });
        client.subscribersGet().then(function(data){
          for(var i = 0; i < data.data.message.length; i++){
            $('#subscribers').append('<h4>' + data.data.message[i].email + '</h4>');
          }
        });
      });
    } else {
      window.location = '/';
    }
  }
}

$('#newsletter').submit(function(e){
  e.preventDefault();

  var client = apigClientFactory.newClient();

  client.subscribePost({}, {email:$('#email').val()}, {})
  .then(function(data){
    if(data.data.statusCode == 200){
      $('#newsletter').hide();
      $('#response').append('<div class="alert alert-success">'+ data.data.message +'</div>')
    } else {
      $('#newsletter').hide();
      $('#response').append('<div class="alert alert-danger">'+ data.data.message +'</div>')
    }
  })

})

$('#signin').submit(function(e){
    e.preventDefault();
    AWSCognito.config.region = 'us-east-1';
    AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:307a3b4c-d6f9-4ff3-9adb-2d89e6676d74'
    });
    // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
    AWSCognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'});

    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({ 
        UserPoolId : 'us-east-1_lvr6H6M7H',
        ClientId : '70tjpc9bn37te5mccl4ecp4v84'
    });

    var authenticationData = {
        Username : $('#username').val(),
        Password : $('#password').val()
    };
    var userData = {
        Username : $('#username').val(),
        Pool : userPool
    };

    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            debugger;
            //localStorage.setItem('token', JSON.stringify(result.idToken.jwtToken));
            AWS.config.credentials.get(function (err) {
                debugger;
                if (err) {
                    alert(err);
                } else {
                    var client = apigClientFactory.newClient({
                        accessKey: AWS.config.credentials.accessKeyId, 
                        secretKey: AWS.config.credentials.secretAccessKey, 
                        sessionToken: AWS.config.credentials.sessionToken,
                        region: 'us-east-1'  
                    });
                }
            });
            window.location = '/';
        },
        onFailure: function(err) {
            alert(err);
            console.log(err);
        }
    });
});


// NO UI in this app for this
function registerNewUser(userName, password, email) {
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({ 
        UserPoolId : 'us-east-1_lvr6H6M7H',
        ClientId : '70tjpc9bn37te5mccl4ecp4v84'
    });

    // Additional user details
    var attributeList = [];

    // Adding an email to the user account
    var dataEmail = {
        Name : 'email',
        Value : email
    };

    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    // The signUp method that creates the user.
    userPool.signUp(userName, password, attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        alert('user name is ' + cognitoUser.getUsername());
    });
}
