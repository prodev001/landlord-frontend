import {
  all, call, put, takeLatest
} from 'redux-saga/effects';

import {
  getLandlord,
  getVP,
  getRM,
  getPM,
  getApp,
  getBuilding,
  getClaim,
  getPolicy
} from './APIs/userAPIs';
import types from '../constants/userConstant';
import {
  setLandlordAction,
  setVPAction,
  setPMAction,
  setRMAction,
  setAppAction,
  setBuildingAction,
  setPolicyAction,
  setClaimAction,
  errMsg
} from '../actions/userActions';

export function* getLandlordSaga({ payload }) {
  try {
    const data = yield getLandlord(payload);
    yield put(setLandlordAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getVPSaga({ payload }) {
  try {
    const data = yield getVP(payload);
    yield put(setVPAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getRMSaga({ payload }) {
  try {
    const data = yield getRM(payload);
    yield put(setRMAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getPMSaga() {
  try {
    const data = yield getPM();
    yield put(setPMAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* ongetLandlord() {
  yield takeLatest(types.GET_LL, getLandlordSaga);
}

export function* ongetVP() {
  yield takeLatest(types.GET_VP, getVPSaga);
}

export function* ongetRM() {
  yield takeLatest(types.GET_RM, getRMSaga);
}

export function* ongetPM() {
  yield takeLatest(types.GET_PM, getPMSaga);
}

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
  yield takeLatest(types.GET_USER_BUILDING, getBuildingSaga);
}

export function* onGetApp() {
  yield takeLatest(types.GET_USER_APP, getAppSaga);
}

export function* onGetClaim() {
  yield takeLatest(types.GET_USER_CLAIM, getClaimSaga);
}

export function* onGetPolicy() {
  yield takeLatest(types.GET_USER_POLICY, getPolicySaga);
}

export function* userSagas() {
  yield all([
    call(ongetLandlord),
    call(ongetVP),
    call(ongetRM),
    call(ongetPM),
    call(onGetBuilding),
    call(onGetApp),
    call(onGetClaim),
    call(onGetPolicy)
  ]);
}
