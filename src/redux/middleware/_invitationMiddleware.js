import * as actionTypes from "../actionTypes"
import {sendInvitation,sendInvitationFail,sendInvitationStart,sendInvitationSuccess} from "../actions/invitation"
import {apiRequest} from "../actions/API"
import * as API from "../../API_URI"



export const sendInvitationMdl=({dispatch})=>next=>action=>{
    next(action)
    console.log("Action Send: ",action)
    if(action.type===actionTypes.INVITATION_API_REQUEST){
        dispatch(sendInvitationStart())
        dispatch(apiRequest('POST',API.SEND_INVITATION,null,actionTypes.SEND_INVITATION_SUCCESS,actionTypes.SEND_INVITATION_FAIL,action.payload))

    }
}


export const afterInvitation=({dispatch})=>next=>action=>{
    next(action)
    if(action.type===actionTypes.SEND_INVITATION_SUCCESS){
        // dispatch(sendInvitationSuccess(action.payload))
        console.log("Invitation Data: ",action.payload)
    }
}



export const invitationMdl=[sendInvitationMdl,afterInvitation]