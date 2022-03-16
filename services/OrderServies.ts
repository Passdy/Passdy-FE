import axiosInstance from "./index";

export const createOrder = (data: object) => axiosInstance.post("/order", data);

export default {
  createOrder,
};
