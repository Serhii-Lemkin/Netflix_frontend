import { axios, loginFail, loginStart, loginSuccess } from '../Imports';

export const loginCall = async (userCred, dispatch) => {
  dispatch(loginStart());
  try {
    console.log(userCred);
    const res = await axios.post('auth/login', userCred);
    console.log(res);
    dispatch(res.data ? loginSuccess(res.data) : loginFail());
  } catch (error) {
    dispatch(loginFail());
  }
};

export const registerCall = async (newUser, dispatch) => {
  dispatch(loginStart());
  try {
    console.log('password: ' + newUser.password);
    const res = await axios.post('auth/register', {
      email: newUser.email,
      password: newUser.password,
      username: newUser.username,
    });
    dispatch(res.data ? loginSuccess(res.data) : loginFail());
  } catch (error) {
    dispatch(loginFail());
  }
};
