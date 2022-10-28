import {combineReducers} from "redux";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import peoplesReducer from "./peoplesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    peoples: peoplesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))