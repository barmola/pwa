import * as actionTypes from "../actionTypes";
import {updateObject} from "./utility"


const initialState={
    loading:false,
    data:null,
    error:null
}

const signupStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}

const signupSuccess=(action,state)=>{
    return updateObject(state,{
        loading:false,
        data:action.payload,
        error:null
    })
}

const signupFail=(action,state)=>{
    return updateObject(state,{
        loading:false,
        data:null,
        error:action.payload
    })
}

const signupReducer = (state=initialState,action)=>{
    switch(action.type){
      case  actionTypes.SIGNUP_START: return signupStart(action,state);
      case  actionTypes.SIGNUP_SUCCESS: return signupSuccess(action,state);
      case  actionTypes.SIGNUP_FAIL: return signupFail(action,state);

      default:
        return state;
    }
}



export default signupReducer;