import * as actionTypes from "../actionTypes"
import axios from "axios"
import * as API from "../../API_URI"
const token=localStorage.getItem('token')

export const sendInvitation=(data)=>({
    type:actionTypes.INVITATION_API_REQUEST,
    payload:data
})


export const sendInvitationStart=()=>({
    type:actionTypes.SEND_INVITATION_START,
})


export const sendInvitationSuccess=(data)=>({
    type:actionTypes.SEND_INVITATION_SUCCESS,
    payload:{data}
})

export const sendInvitationFail=(error)=>({
    type:actionTypes.SEND_INVITATION_FAIL,
    payload:{error}
})




export const sendInvitations=(data)=>{    
    return dispatch=>{
        dispatch(sendInvitationStart())
        axios.post(API.SEND_INVITATION,data,{headers:{
            "Authorization":"Bearer"+" "+token
        }})
        .then(res=>{
            console.log("Invitation Response: ",res.data)
            dispatch(sendInvitationSuccess(res.data))
        })
        .catch(err=>{
            console.log("Invitation Error: ",err.response)
            dispatch(sendInvitationFail(err.response))
        })
    }
}