import {
  all, call, put, takeLatest
} from 'redux-saga/effects';
import {
  logIn,
  register,
  verifyEmail
} from './apis';
import {
  emailVerifySuccess,
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
  emailVerifyFailure
} from '../actions/authActions';
import types from '../constants/authConstants';

const setToken = (token) => localStorage.setItem('token', token);

export function* verifyEmailWithCredential({ email }) {
  try {
    const response = yield verifyEmail(email);
    yield put(emailVerifySuccess(response.userInfo));
  } catch (error) {
    yield put(emailVerifyFailure(error.message));
  }
}

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password);
    setToken(user.accessToken);
    yield put(logInSuccess({
      name: user.username,
      email: user.email,
      role: user.role,
      landlordId: user.landlord_id
    }));
  } catch (error) {
    yield put(logInFailure(error.response));
  }
}

export function* registerWithCredentials({
  payload: {
    email, password, username, role
  }
}) {
  try {
    yield register(username, email, password, role);
    yield put(registerSuccess({ email, password }));
  } catch (error) {
    yield put(registerFailure(error.response.data));
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } });
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* onVerifyEmail() {
  yield takeLatest(types.EMAIL_VERIFY, verifyEmailWithCredential);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
    call(onVerifyEmail)
  ]);
}
