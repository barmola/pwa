import * as actionTypes from "../actionTypes"
import * as API from "../../API_URI"
import axios from "axios"


export const api = ({dispatch})=>next=>action=>{
    if(action.type === actionTypes.API_REQUEST){
        const {method,url,onSuccess,onError,params}=action.meta;
        console.log("API Params: ",params)

        axios({
            url:url,
            method:method,
            baseURL:API.BASE_API,
            transformRequest:[(data,headers)=>{
               const serializedData=[]
               for(const k in data){
                   if(data[k]){
                       serializedData.push(`${k}=${encodeURIComponent(data[k])}`)
                   }
               }
               return serializedData.join('&')
            }],
            data:params,
            transformResponse:[(data)=>{
                console.log('Data Response: ',data)
            }],
        }).then(res=>{
            console.log("Response: ",JSON.parse(res.request.response))
            if(res.request){
                console.log("Hello")
                dispatch({type:onSuccess,payload:JSON.parse(res.request.response)})
            }    
        })
        .catch(error=>{
            if(error.response){
                console.log('Error: ',error.response.request.response)
                dispatch({type:onError,payload:JSON.parse(error.response.request.response)})
            }
        })
    }
    return next(action)
}