import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
        />

        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />

        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
