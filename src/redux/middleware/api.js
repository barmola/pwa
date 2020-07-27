import * as actionTypes from "../actionTypes"
import * as API from "../../API_URI"
import axios from "axios"
const token=localStorage.getItem('token')

export const api = ({dispatch})=>next=>action=>{
    if(action.type === actionTypes.API_REQUEST){
        const {method,url,onSuccess,onError,params}=action.meta;
        console.log("API Params: ",params)

        axios({
            url:url,
            method:method,
            baseURL:API.BASE_API,
            headers:{
                Authorization:`Bearer ${token}`
                
            },
            transformRequest:[(data,headers)=>{
               const serializedData=[]
               let demodata=[]
               for(const k in data){
                   if(data[k]){
                       console.log("Data KKKK: ",data[k])
                       if(url==="/accounts/send_invitation/")
                       demodata.push(data[k])
                       serializedData.push(`${k}=${encodeURIComponent(data[k])}`)
                   }
               }
               console.log("demodata=",demodata);
               console.log("Serialized Data: ",serializedData.join('&'))
               if(url==="/accounts/send_invitation/") return JSON.stringify(demodata)
               return serializedData.join('&')
            //    return JSON.stringify([{index:1,email:"jalkdj@lkd.com"}])
             
            }],
            data:params,
            transformResponse:[(data)=>{
                console.log('Data Response: ',data)
            }],
        }).then(res=>{
            console.log("Response: ",res.data)
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