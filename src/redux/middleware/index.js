import {authenticationMdl} from "./_loginMiddleware"
import {api} from "./api"
import {invitationMdl} from "./_invitationMiddleware"

export const Middleware=[
    ...authenticationMdl,
    ...invitationMdl,
    api
]