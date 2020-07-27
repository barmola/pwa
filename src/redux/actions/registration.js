import * as actionTypes from "../actionTypes"
import axios from "axios"
import * as API from "../../API_URI"
const token=localStorage.getItem('token')

export const signupStart=()=>({
    type:actionTypes.SEND_INVITATION_START,
})


export const signupSuccess=(data)=>({
    type:actionTypes.SEND_INVITATION_SUCCESS,
    payload:{data}
})

export const signupFail=(error)=>({
    type:actionTypes.SEND_INVITATION_FAIL,
    payload:{error}
})




export const signup=(firstName,lastName,username,phone,email,password,date,key)=>{
    return dispatch=>{
            axios.post(API.SIGNUP,{
                    "first_name":firstName,
                    "last_name":lastName,
                    "username":username,
                    "phone":phone,
                    "email":email,
                    "password":password,
                    "dob":date,
                    "key":key
            })
            .then(res=>{
                console.log("SIGNUP REPONSE: ",res.data)
                dispatch(signupSuccess(res.data))
                localStorage.setItem('token',res.data.success.access)
                
            })
            .catch(err=>{
                console.log("SIGNUP ERROR: ",err.response)
            })
    }
}