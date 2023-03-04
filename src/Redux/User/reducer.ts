import {
	LOGIN_LOADING,
	LOGIN_ERR,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP_ERR,
	SIGNUP_LOADING,
	SIGNUP_SUCCESS,
  } from "./actionTypes";
  
  export interface stateType {
	loading: boolean;
	error: boolean;
	isAuth: boolean;
	authData: any;
  }
  
  type actionType =
  | { type: "signup/loading" }
  | { type: "signup/success" }
  | { type: "signup/error" }
	| { type: "login/loading" }
	| { type: "login/success" }
	| { type: "login/error" }
	| { type: "logout" };
  
  const initialState: stateType = {
	loading: false,
	error: false,
	isAuth: false,
	authData: null,
  };
  
  export default function authReducer(
	state: stateType = initialState,
	action: actionType
  ): stateType {
	switch (action.type) {
		case SIGNUP_LOADING:
		return { ...state, loading: true };
	  case SIGNUP_SUCCESS:
		return { ...state, loading: false, isAuth: false, error: false };
	  case SIGNUP_ERR:
		return { ...state, loading: false, isAuth: false, error: true };
	  case LOGIN_LOADING:
		return { ...state, loading: true };
	  case LOGIN_SUCCESS:
		return { ...state, loading: false, isAuth: true, error: false };
	  case LOGIN_ERR:
		return { ...state, loading: false, isAuth: false, error: true };
	  case LOGOUT:
		return { ...state, isAuth: false };
	  default:
		return state;
	}
  }