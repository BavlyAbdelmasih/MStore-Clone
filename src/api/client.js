import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.22:3000/api/v1",
});

export default apiClient;
