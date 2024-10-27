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

const LogOut = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `${baseURL}/logout`,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    return err.response.data;
  }
};

const ForgetPassword = async (email) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${baseURL}/forgotPassword`,
      data: {
        email,
      },
    });

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    return err.response.data;
  }
};

const Me = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `${baseURL}/me`,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    return err.response.data;
  }
};


const ResetPassword = async (id, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${baseURL}/resetPassword/${id}`,
      withCredentials: true,
      data: {
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    return err.response.data;
  }
};
export let userAPI = {
  login,
  signUp,
  LogOut,
  ForgetPassword,
  ResetPassword,Me
};
