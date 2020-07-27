import * as actionTypes from "../actionTypes"


export const apiRequest = (method, url, body, onSuccess, onError,params) => ({
    type: actionTypes.API_REQUEST,
    payload: body,
    meta: {method, url, onSuccess, onError,params}
  });