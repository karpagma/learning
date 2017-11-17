import firebase from 'firebase';
import React, {Component} from 'react';
import {Text} from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import {Input, Spinner} from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };

    this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  userNameChangeHandler(email) {
    this.setState({
      email: email
    });
  }

  passwordChangeHandler(password) {
    this.setState({
      password: password
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  loginHandler() {
    const {email, password} = this.state;

    this.setState({
      error: '',
      loading: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.loginHandler}>Log In</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={this.state.email}
            onChangeText={this.userNameChangeHandler}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={this.passwordChangeHandler}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
