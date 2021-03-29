import client from "./client";

const endpoint = "/products";

const getProducts = () => client.get(endpoint);

const addProducts = (product) => client.post(endpoint, userInfo);

export default {
  getProducts,
};
