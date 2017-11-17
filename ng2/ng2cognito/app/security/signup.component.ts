import { Component } from 'angular2/core';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

let { CognitoUserPool, CognitoUserAttribute, CognitoUser } = AmazonCognitoIdentity;

@Component({
    templateUrl: 'app/security/signup.component.html'
})
export class SignupComponent {
    public pageTitle = "New User - Signup";
    email: string;
    password: string;

    signup(event) {
        event.preventDefault();

        var poolData = { 
            UserPoolId : 'us-east-1_TkMx1y7aE', // Your user pool id here
            ClientId : '4rasb8dmd950dc5moeoja9fo5c' // Your client id here
        };
        var userPool = new CognitoUserPool(poolData);
        var attributeList = [];
        var dataEmail = {
            Name : 'email',
            Value : this.email
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);

        userPool.signUp('username', 'password', attributeList, null, function(err, result){
            if (err) {
                return alert(err);
            }
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
    }
}