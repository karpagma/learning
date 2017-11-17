import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';

import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from './actions';

class EmployeeEdit extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.employeeUpdateHandler = this.employeeUpdateHandler.bind(this);
    this.sendTextHandler = this.sendTextHandler.bind(this);
    this.fireEmployeeHandler = this.fireEmployeeHandler.bind(this);
    this.fireEmployeeConfirmHandler = this.fireEmployeeConfirmHandler.bind(
      this
    );
    this.fireEmployeeCancelHandler = this.fireEmployeeCancelHandler.bind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  employeeUpdateHandler() {
    const {name, phone, shift} = this.props;

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  sendTextHandler() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on${shift}`);
  }

  fireEmployeeHandler() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  fireEmployeeConfirmHandler() {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
    this.setState({
      showModal: !this.state.showModal
    });
  }

  fireEmployeeCancelHandler() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.employeeUpdateHandler}>Save</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.sendTextHandler}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.fireEmployeeHandler}>Fire</Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.fireEmployeeConfirmHandler}
          onDecline={this.fireEmployeeCancelHandler}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
