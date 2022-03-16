import axiosInstance from "./index";

declare type ParamGetAddress = {
  address_type: "province" | "district" | "ward";
  parent_id?: number;
};

const getAddress = (params: ParamGetAddress) => axiosInstance.get("/address", { params });

export default {
  getAddress,
};
