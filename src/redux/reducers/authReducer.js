import * as actionTypes from "../actionTypes";
import {updateObject} from "./utility"

const initialState={
    token:null,
    loading:false,
    isAuthenticated:false,
    error:null
}




const authStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}

const authSuccess=(action,state)=>{
    return updateObject(state,{
        loading:false,
        isAuthenticated:true,
        token:action.payload.data,
        error:null
    })
}

const authFail=(action,state)=>{
    return updateObject(state,{
        loading:false,
        error:action.payload.error
    })
}



const authReducer = (state=initialState,action)=>{
    switch(action.type){
      case  actionTypes.AUTHENTICATION_START: return authStart(action,state);
      case  actionTypes.AUTHENTICATION_SUCCESS: return authSuccess(action,state);
      case  actionTypes.AUTHENTICATION_FAIL: return authFail(action,state);

      default:
        return state;
    }
}



export default authReducer;