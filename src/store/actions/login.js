import API from 'services/api';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING'
export function userLoginLoading() {
  return {
    type: USER_LOGIN_LOADING
  };
};

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export function userLoginSuccess(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user
  };
}

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export function userLoginFailure(error) {
  return {
    type: USER_LOGIN_FAILURE,
    error
  };
}

export function userLoginRequest(userData, history) {
  return (dispatch) => {
    dispatch(userLoginLoading());

    return API.post('/login', userData)
      .then(
        (response) => { 
          const { token } = response.data._meta;

          localStorage.setItem('voomToken', token);
          setAuthorizationToken(token);
          dispatch(userLoginSuccess(jwt.decode(token)))
          history.push('/');
        },

	      (error) => {
          const { message, messages } = error.response.data._meta.error;
          console.log(message, messages)
          dispatch(userLoginFailure({ message, messages }))
        }
      );
  }
}
