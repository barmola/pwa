import * as actionTypes from "../actionTypes";
import {updateObject} from "./utility"

const initialState={
    loading:false,
    data:null,
    error:null
}




const sendInvitationStart=(action,state)=>{
    return updateObject(state,{
        loading:true
    })
}

const sendInvitationSuccess=(action,state)=>{
    return updateObject(state,{
        loading:false,
        data:action.payload,
        error:null
    })
}

const sendInvitationFail=(action,state)=>{
    return updateObject(state,{
        loading:false,
        data:null,
        error:action.payload
    })
}



const sendInvitationReducer = (state=initialState,action)=>{
    switch(action.type){
      case  actionTypes.SEND_INVITATION_START: return sendInvitationStart(action,state);
      case  actionTypes.SEND_INVITATION_SUCCESS: return sendInvitationSuccess(action,state);
      case  actionTypes.SEND_INVITATION_FAIL: return sendInvitationFail(action,state);

      default:
        return state;
    }
}



export default sendInvitationReducer;