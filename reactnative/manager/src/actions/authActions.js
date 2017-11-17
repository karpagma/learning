import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_STARTED
} from './types';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

const dispatchLoginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const dispatchLoginUserFailed = (dispatch, err) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: err
  });
};

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({type: LOGIN_USER_STARTED});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => dispatchLoginUserSuccess(dispatch, user))
      .catch(err => {
        console.log(err);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => dispathLoginUserSuccess(dispatch, user))
          .catch(err => dispatchLoginUserFailed(dispatch, err));
      });
  };
};
