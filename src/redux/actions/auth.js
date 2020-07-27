import * as actionTypes from "../actionTypes"
import axios from "axios"
import * as API from "../../API_URI"

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




export const authentication=(email,password)=>{
    return dispatch=>{
        dispatch(authStart())
        axios.post(API.LOGIN,{
            "username":email,
            "password":password
        })
        .then(res=>{
            console.log("Login Data:",res.data)
            localStorage.setItem('token',res.data.access)
            dispatch(authSuccess(res.data))

        })
        .catch(err=>{
            console.log("Login Error:",err.response)
            dispatch(authFail(err.response.data.detail))
        })
    }
}