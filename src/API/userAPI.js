import axios from "axios";

let baseURL = "http://localhost:3001/api/v1/users";

const login = async (email, password) => {
  const payload = {
    email,
    password,
  };
  return await axios.post(`${baseURL}/login`, payload);
};

const signUp = async (name,email, password, passwordConfirm) => {
  const payload = {
    name,
    email,
    password,
    passwordConfirm
  };
  
  return await axios.post(`${baseURL}/signup`, payload);
};

export let userAPI = {
  login,
  signUp,
};
