import {combineReducers} from "redux"
import authReducer from "./authReducer"
import sendInvitationReducer from "./invitationReducer"
import registrationReducer from "./registrationReducer"





export const Reducers= combineReducers({
    authReducer,
    sendInvitationReducer,
    registrationReducer
})