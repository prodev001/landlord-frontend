import types from '../constants/userConstant';

export const getLandlordAction = (data) => ({
  type: types.GET_LL,
  payload: data
});

export const setLandlordAction = (data) => ({
  type: types.SET_LL,
  payload: data
});

export const getVPAction = (data) => ({
  type: types.GET_VP,
  payload: data
});

export const setVPAction = (data) => ({
  type: types.SET_VP,
  payload: data
});

export const getRMAction = (data) => ({
  type: types.GET_RM,
  payload: data
});

export const setRMAction = (data) => ({
  type: types.SET_RM,
  payload: data
});


export const getPMAction = (data) => ({
  type: types.GET_PM,
  payload: data
});

export const setPMAction = (data) => ({
  type: types.SET_PM,
  payload: data
});

export const errMsg = (msg) => ({
  type: types.SET_ERR,
  payload: msg
});

export const getBuildingAction = (data) => ({
  type: types.GET_USER_BUILDING,
  payload: data
});

export const setBuildingAction = (data) => ({
  type: types.SET_USER_BUILDING,
  payload: data
});

export const getAppAction = (data) => ({
  type: types.GET_USER_APP,
  payload: data,
});

export const setAppAction = (data) => ({
  type: types.SET_USER_APP,
  payload: data,
});

export const getClaimAction = (data) => ({
  type: types.GET_USER_CLAIM,
  payload: data,
});

export const setClaimAction = (data) => ({
  type: types.SET_USER_CLAIM,
  payload: data,
});

export const getPolicyAction = (data) => ({
  type: types.GET_USER_POLICY,
  payload: data,
});

export const setPolicyAction = (data) => ({
  type: types.SET_USER_POLICY,
  payload: data,
});
