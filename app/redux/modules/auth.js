import { fromJS, Map } from 'immutable';
import types from '../constants/authConstants';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const initialImmutableState = fromJS(INITIAL_STATE);

const authReducer = (state = initialImmutableState, action = {}) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState.set('currentUser', fromJS(action.payload));
        mutableState.set('error', Map());
      });
    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return state.withMutations((mutableState) => {
        mutableState.set('currentUser', null);
        mutableState.set('error', fromJS(action.payload.data));
      });
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
