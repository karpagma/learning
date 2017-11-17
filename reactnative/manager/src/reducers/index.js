import {combineReducers} from 'redux';

import authReducer from './authReducer';
import employeeReducer from './employeeReducer';
import employeeFormReducer from './employeeFormReducer';

export default combineReducers({
  auth: authReducer,
  employees: employeeReducer,
  employeeForm: employeeFormReducer
});
