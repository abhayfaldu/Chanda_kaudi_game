import axios from "axios";

export const login_api = (email: string, password: string): Promise<any> => {
	return axios.post("https://different-bat-sun-hat.cyclic.app/user/login", {
	  email,
	  password,
	});
  };


  export const Register_api = (email: string , password: string , name: string , image: string):Promise<any> => {
 return axios.post("https://different-bat-sun-hat.cyclic.app/user/register",{
	email , password , name , image
 })
  }
