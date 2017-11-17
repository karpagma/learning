System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AmazonCognitoIdentity, CognitoUserPool, CognitoUserAttribute, CognitoUser, SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AmazonCognitoIdentity = require('amazon-cognito-identity-js');
            { CognitoUserPool, CognitoUserAttribute, CognitoUser } = AmazonCognitoIdentity;
            let SignupComponent = class SignupComponent {
                constructor() {
                    this.pageTitle = "New User - Signup";
                }
                signup(event) {
                    event.preventDefault();
                    var poolData = {
                        UserPoolId: 'us-east-1_TkMx1y7aE',
                        ClientId: '4rasb8dmd950dc5moeoja9fo5c' // Your client id here
                    };
                    var userPool = new CognitoUserPool(poolData);
                    var attributeList = [];
                    var dataEmail = {
                        Name: 'email',
                        Value: this.email
                    };
                    var attributeEmail = new CognitoUserAttribute(dataEmail);
                    attributeList.push(attributeEmail);
                    userPool.signUp('username', 'password', attributeList, null, function (err, result) {
                        if (err) {
                            return alert(err);
                        }
                        var cognitoUser = result.user;
                        console.log('user name is ' + cognitoUser.getUsername());
                    });
                }
            };
            SignupComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/security/signup.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], SignupComponent);
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map