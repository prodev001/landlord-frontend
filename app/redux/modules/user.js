import { fromJS, Map } from 'immutable';
import types from '../constants/userConstant';

const INITIAL_STATE = {
  landlord: null,
  vp: null,
  rm: null,
  pm: null,
  application: null,
  building: null,
  claim: null,
  policy: null,
  error: null,
};

const initialImmutableState = fromJS(INITIAL_STATE);

const userReducer = (state = initialImmutableState, action = {}) => {
  switch (action.type) {
    case types.SET_LL:
      return state.withMutations((mutableState) => {
        mutableState.set('landlord', fromJS(action.payload));
      });
    case types.SET_VP:
      return state.withMutations((mutableState) => {
        mutableState.set('vp', fromJS(action.payload));
      });
    case types.SET_RM:
      return state.withMutations((mutableState) => {
        mutableState.set('rm', fromJS(action.payload));
      });
    case types.SET_PM:
      return state.withMutations((mutableState) => {
        mutableState.set('pm', fromJS(action.payload));
      });
    case types.SET_USER_BUILDING:
      return state.withMutations((mutableState) => {
        mutableState.set('building', fromJS(action.payload));
      });
    case types.SET_USER_APP:
      return state.withMutations((mutableState) => {
        mutableState.set('application', fromJS(action.payload));
      });
    case types.SET_USER_CLAIM:
      return state.withMutations((mutableState) => {
        mutableState.set('claim', fromJS(action.payload));
      });
    case types.SET_USER_POLICY:
      return state.withMutations((mutableState) => {
        mutableState.set('policy', fromJS(action.payload));
      });
    case types.SET_ERR:
      return state.withMutations((mutableState) => {
        mutableState.set('error', fromJS(action.payload));
      });
    default:
      return state;
  }
};

export default userReducer;
