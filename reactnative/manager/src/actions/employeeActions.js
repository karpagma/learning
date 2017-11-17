import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATED,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        Actions.employeeList({type: 'reset'});
        dispatch({type: EMPLOYEE_CREATED});
      });
  };
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        Actions.employeeList({type: 'reset'});
        dispatch({type: EMPLOYEE_SAVE_SUCCESS});
      });
  };
};

export const employeesFetch = () => dispatch => {
  const {currentUser} = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
    });
};

export const employeeDelete = ({uid}) => dispatch => {
  const {currentUser} = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList({type: 'reset'});
    });
};
