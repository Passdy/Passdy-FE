import axiosInstance from "./index";

declare type ParamsLogin = {
  username: string;
  password: string;
};

interface ParamsRegister extends ParamsLogin {
  rePassword: string;
  email: string;
}

interface ExampleUserType {
  id?: string;
}

const login = (data: ParamsLogin): Promise<ExampleUserType> => axiosInstance.post("/auth/login", data);

const register = (data: ParamsRegister) => axiosInstance.post("/user/register", data);

export default {
  login,
  register,
};
