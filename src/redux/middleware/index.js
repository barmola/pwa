import {authenticationMdl} from "./_loginMiddleware"
import {api} from "./api"

export const Middleware=[
    ...authenticationMdl,
    api
]