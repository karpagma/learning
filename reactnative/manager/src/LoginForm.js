import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardSection, Input, Button, Spinner} from './common';
import * as actions from './actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  emailChangeHandler(text) {
    this.props.emailChanged(text);
  }

  passwordChangeHandler(text) {
    this.props.passwordChanged(text);
  }

  loginHandler() {
    const {email, password} = this.props;
    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.loginHandler}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.emailChangeHandler}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.passwordChangeHandler}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
