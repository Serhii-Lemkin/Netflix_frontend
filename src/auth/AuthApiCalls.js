import { axios, loginFail, loginStart, loginSuccess } from '../Imports';

export const loginCall = async (userCred, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('auth/login', userCred);
    dispatch(res.data ? loginSuccess(res.data) : loginFail());
  } catch (error) {
    dispatch(loginFail());
  }
};

export const registerCall = async (newUser, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('auth/register', newUser);
    dispatch(res.data ? loginSuccess(res.data) : loginFail());
  } catch (error) {
    dispatch(loginFail());
  }
};
