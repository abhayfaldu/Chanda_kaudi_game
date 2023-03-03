import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./User/reducer";

const rootReducer = combineReducers({ AuthManager: authReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
