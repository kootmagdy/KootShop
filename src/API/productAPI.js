import axios from "axios";

let baseURL = "http://localhost:3001/api/v1/products";

const getProducts = async () => {
  return await axios({
    method: "GET",
    url: `${baseURL}`,
    withCredentials: true,
  });
};

const addProduct = async (title, price, imgSrc) => {
  const payload = {
    title,
    price,
    imgSrc,
  };
  return await axios({
    method: "POST",
    url: `${baseURL}`,
    data: payload,
    withCredentials: true,
  });
};

let deleteProduct = async (_id) => {
  return await axios({
    method: "DELETE",
    url: `${baseURL}/${_id}`,
    withCredentials: true,
  });
};
let updateProduct = async (pId, product) => {
  return await axios({
    method: "PUT",
    url: `${baseURL}/${pId}`,
    data: product,
    withCredentials: true,
  });
}

export let productAPI = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
