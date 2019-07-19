import API from 'services/api';
import jwt from 'jsonwebtoken';

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
          const isAdmin = response.data.data.is_admin;

          localStorage.setItem('voomToken', token);
          dispatch(userLoginSuccess({ ...jwt.decode(token), isAdmin }))
          history.push('/admin');
        },

	      (error) => {
          const { message, messages } = error.response.data._meta.error;
          console.log(message, messages)
          dispatch(userLoginFailure({ message, messages }))
        }
      );
  }
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export function getCurrentUser(token) {
  const { userId } = jwt.decode(token);

  console.log('I ran ==> action')
  return (dispatch) => {
    return API.get(`/users/${userId}`)
      .then(
        (response) => {
          const isAdmin = response.data.data.is_admin;

          dispatch({
            type: SET_CURRENT_USER,
            user: { ...jwt.decode(token), isAdmin }
          });
        }
      )
  }
}
