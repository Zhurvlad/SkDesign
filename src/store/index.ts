import {applyMiddleware, compose, createStore} from "redux";



import thunk from "redux-thunk";
import info from "./reducers/info";



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(info, composeEnhancers(applyMiddleware(thunk)))

