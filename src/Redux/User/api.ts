import axios from "axios";

export const login_api = (email: string, password: string): Promise<any> => {
	return axios.post("https://different-bat-sun-hat.cyclic.app/users/login", {
	  email,
	  password,
	});
  };