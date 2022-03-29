import axiosInstance from "./index";

const createOrder = (data: object) => axiosInstance.post("/order", data);

export default {
  createOrder,
};
