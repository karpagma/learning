import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILED,
  LOGIN_USER_STARTED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload}; 

    case LOGIN_USER_FAILED:
        return {...state, 
          error: 'Authenticaton Failed ' + action.payload, 
          loading: false, 
          password: ''
        }

    case LOGIN_USER_STARTED:
      return {...state, loading: true, error: ''};

      
    default: 
      return state;
  }
}
