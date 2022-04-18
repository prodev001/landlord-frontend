import {
  all, call, put, takeLatest
} from 'redux-saga/effects';

import {
  getBuilding,
  getApp,
  getClaim
} from './apis';
import types from '../constants/propertyConstant';
import {
  getBuildingAction,
  setBuildingAction,
  getAppAction,
  getClaimAction,
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

export function* getAppSaga() {
  try {
    const data = yield getApp();
    yield put(getBuildingAction(data));
  } catch (error) {
    yield put(errMsg(error.response));
  }
}

export function* getClaimSaga() {
  try {
    const data = yield getClaim();
    yield put(getBuildingAction(data));
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

export function* propertySagas() {
  yield all([
    call(onGetBuilding),
    call(onGetApp),
    call(onGetClaim),
  ]);
}
