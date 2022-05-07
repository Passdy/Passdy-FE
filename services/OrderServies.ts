import axiosInstance from "./index";

const createOrder = (data: object) => axiosInstance.post("/order", data);

const orderList = (params:object) => axiosInstance.get("/order", { params });

export default {
  createOrder,
  orderList,
};
