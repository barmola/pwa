import {Reducers} from "../reducers"
import thunk from "redux-thunk"
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {Middleware} from "../middleware/index"
import {withRouter} from "react-router-dom"
// const middleWare = applyMiddleware(thunk)

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware=applyMiddleware(thunk)

const store = createStore(Reducers,composeEnhances(middleware))

export default withRouter(store);