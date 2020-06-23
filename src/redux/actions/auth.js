import * as actionTypes from "../actionTypes"


export const authStart=(username,password)=>({
    type:actionTypes.AUTHENTICATION_START,
    payload:{username,password}
})

export const authSuccess=(data)=>({
    type:actionTypes.AUTHENTICATION_SUCCESS,
    payload:{data}
})

export const authFail=(error)=>({
    type:actionTypes.AUTHENTICATION_FAIL,
    payload:{error}
})