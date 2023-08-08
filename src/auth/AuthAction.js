export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_MY_LIST = 'ADD_TO_MY_LIST';
export const REMOVE_FROM_MY_LIST = 'REMOVE_FROM_MY_LIST';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const ERROR = 'ERROR';

export const loginStart = () => ({ type: LOGIN_START });
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFail = () => ({ type: LOGIN_FAIL });

export const logOut = () => ({ type: LOGOUT });
