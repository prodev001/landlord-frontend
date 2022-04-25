import {
  all, call, put, takeLatest
} from 'redux-saga/effects';

import {
  getBuilding,
  getApp,
  getClaim,
  getPolicy
} from './APIs/propertyAPIs';
import types from '../constants/propertyConstant';
import {
  setBuildingAction,
  setAppAction,
  setClaimAction,
  setPolicyAction,
  errMsg
} from '../actions/propertyActions';

export function* getBuildingSaga({ payload }) {
  try {
    const data = yield getBuilding(payload);
    yield put(setBuildingAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getAppSaga({ payload }) {
  try {
    const data = yield getApp(payload);
    yield put(setAppAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getClaimSaga({ payload }) {
  try {
    const data = yield getClaim(payload);
    yield put(setClaimAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getPolicySaga() {
  try {
    const data = yield getPolicy();
    yield put(setPolicyAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* onGetBuilding() {
  yield takeLatest(types.GET_BUILDING, getBuildingSaga);
}

export function* onGetApp() {
  yield takeLatest(types.GET_APP, getAppSaga);
}

export function* onGetClaim() {
  yield takeLatest(types.GET_CLAIM, getClaimSaga);
}

export function* onGetPolicy() {
  yield takeLatest(types.GET_POLICY, getPolicySaga);
}

export function* propertySagas() {
  yield all([
    call(onGetBuilding),
    call(onGetApp),
    call(onGetClaim),
    call(onGetPolicy)
  ]);
}
