import * as actionTypes from "../actionTypes"
import {authStart,authSuccess,authFail} from "../actions/auth"
import {apiRequest} from "../actions/API"
import * as API from "../../API_URI"
export const authenticationStart=({dispatch})=>next=>action=>{
    next(action);

        const {payload}=action
        console.log("Start Log: ",action)
    if(action.type===actionTypes.AUTHENTICATION_START){
        dispatch(apiRequest('POST',API.LOGIN,null,actionTypes.AUTHENTICATION_SUCCESS,actionTypes.AUTHENTICATION_FAIL,payload));
    }

}



export const navigateAfterLogin=({dispatch})=>next=>action=>{
    next(action);
    if(action.type===actionTypes.AUTHENTICATION_SUCCESS){
        console.log('Navigate Success Function: ',action)
        const token=action.payload.access
        const localToken=localStorage.setItem('token',token)
    }
}







export const authenticationMdl=[authenticationStart,navigateAfterLogin]