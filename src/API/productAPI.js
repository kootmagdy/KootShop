import axios from "axios";

let baseURL = "http://localhost:3001/api/v1/products";

const getProducts = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return await axios.get(`${baseURL}`, { headers });
};

const addProduct = async (token, title, price, imgSrc) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const payload = {
    title,
    price,
    imgSrc,
  };
  return await axios.post(baseURL, payload, { headers });
};

let deleteProduct = async (token, _id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return await axios.delete(`${baseURL}/${_id}`,{headers});
};
let updateProduct = (pId, product) => axios.put(`${baseURL}/${pId}`, product);

export let productAPI = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
