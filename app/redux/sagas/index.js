import { all, call } from 'redux-saga/effects';

import { authSagas } from './authSaga';
import { propertySagas } from './propertySaga';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(propertySagas),
  ]);
}
