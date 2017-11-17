import _ from 'lodash';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './ListItem';

import * as actions from './actions/employeeActions';

class EmployeeList extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.dataSource = dataSource.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, actions)(EmployeeList);