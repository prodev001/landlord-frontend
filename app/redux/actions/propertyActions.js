import types from '../constants/propertyConstant';

export const getBuildingAction = (data) => ({
  type: types.GET_BUILDING,
  payload: data
});

export const setBuildingAction = (data) => ({
  type: types.SET_BUILDING,
  payload: data
});

export const getAppAction = (data) => ({
  type: types.GET_APP,
  payload: data,
});

export const setAppAction = (data) => ({
  type: types.SET_APP,
  payload: data,
});

export const getClaimAction = (data) => ({
  type: types.GET_CLAIM,
  payload: data,
});

export const setClaimAction = (data) => ({
  type: types.SET_CLAIM,
  payload: data,
});

export const getPolicyAction = (data) => ({
  type: types.GET_POLICY,
  payload: data,
});

export const setPolicyAction = (data) => ({
  type: types.SET_POLICY,
  payload: data,
});

export const errMsg = (msg) => ({
  type: types.SET_ERR,
  payload: msg
});
