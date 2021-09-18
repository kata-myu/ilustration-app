import axiosBase from "axios";

export default axiosBase.create({
  baseURL: "http://localhost:3000",
  responseType: "json",
});
