import { fromJS, Map } from 'immutable';
import types from '../constants/propertyConstant';
import INITIAL_STATE from './data';

// const INITIAL_STATE = {
//   building: null,
//   application: null,
//   claim: null,
//   policy: null,
//   error: null,
// };

const initialImmutableState = fromJS(INITIAL_STATE);

const propertyReducer = (state = initialImmutableState, action = {}) => {
  switch (action.type) {
    // case types.SET_BUILDING:
    //   return state.withMutations((mutableState) => {
    //     mutableState.set('building', fromJS(action.payload));
    //   });
    // case types.SET_APP:
    //   return state.withMutations((mutableState) => {
    //     mutableState.set('application', fromJS(action.payload));
    //   });
    // case types.SET_CLAIM:
    //   return state.withMutations((mutableState) => {
    //     mutableState.set('claim', fromJS(action.payload));
    //   });
    // case types.SET_POLICY:
    //   return state.withMutations((mutableState) => {
    //     mutableState.set('policy', fromJS(action.payload));
    //   });
    // case types.SET_ERR:
    //   return state.withMutations((mutableState) => {
    //     mutableState.set('error', fromJS(action.payload));
    //   });
    default:
      return state;
  }
};

export default propertyReducer;
