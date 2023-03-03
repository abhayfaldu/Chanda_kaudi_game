import {
	LOGIN_LOADING,
	LOGIN_ERR,
	LOGIN_SUCCESS,
	LOGOUT,
	SIGNUP_ERR,
	SIGNUP_LOADING,
	SIGNUP_SUCCESS
  } from "./actionTypes";
  import { login_api } from "./api";
  import {Register_api} from "./api";

export const registerLoading=() =>{
		return {
			type: SIGNUP_LOADING,
		}
}

export const register=(email: string, password: string , name:string , image :string ) =>async (dispatch: any) =>{
	dispatch({ type: SIGNUP_LOADING });
	try {
		
	  let ans = await Register_api(email, password , name , image);
	  if (ans.data ) {
		dispatch({ type: SIGNUP_SUCCESS });
		
	  } else {
		dispatch({ type: SIGNUP_ERR });
	  }
	} catch (err) {
	  dispatch({ type: SIGNUP_ERR });

	}
}


  export const loginLoading = () => {
	return {
	  type: LOGIN_LOADING,
	};
  };
 
  export const auth_login =
	(email: string, password: string) => async (dispatch: any) => {
	  dispatch({ type: LOGIN_LOADING });
	  try {
		let ans = await login_api(email, password);
		if (ans.data && ans.data.token) {
		  dispatch({ type: LOGIN_SUCCESS });
		} else {
		  dispatch({ type: LOGIN_ERR });
		}
	  } catch (err) {
		dispatch({ type: LOGIN_ERR });
	  }
	};
  
  export const auth_logout = () => (dispatch: any) => {
	dispatch({ type: LOGOUT });
  };