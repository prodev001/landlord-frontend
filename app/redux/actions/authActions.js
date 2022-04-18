import types from '../constants/authConstants';

export const emailVerify = (email) => ({
  type: types.EMAIL_VERIFY,
  email,
});

export const emailVerifySuccess = (res) => ({
  type: types.EMAIL_VERIFY_SUCCESS,
  payload: res,
});

export const emailVerifyFailure = (res) => ({
  type: types.EMAIL_VERIFY_FAILURE,
  payload: res,
});

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
});

export const registerStart = (credentials) => ({
  type: types.REGISTER_START,
  payload: credentials,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
