import axiosInstance from "./index";

declare type ParamsLogin = {
  username: string;
  password: string;
};

interface ExampleUserType {
  id?: string;
}

const login = (data: ParamsLogin): Promise<ExampleUserType> => axiosInstance.post("/auth/login", data);

const register = (data: any) => axiosInstance.post("/user/register", data);

export default {
  login,
  register,
};
