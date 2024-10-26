import React, { useContext, useRef, useState } from "react";
import { userAPI } from "../API/userAPI";
import { MainContext } from "./../Context/MainContext";
import { useNavigate } from "react-router-dom";

export default function MyLogin() {
  let { setToken , setUser } = useContext(MainContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigateTo = useNavigate();
  const [error, setError] = useState(null); // State variable for error message

  const btnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      try {
        const result = await userAPI.login(email, password);
        setUser(result.data.data);
        setToken(result.data.token);
        navigateTo("/home");
      } catch (err) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="w-50">
          <div className="vstack gap-3">
            <h3 className="text-center">Sign In:</h3>

            <div className="form-group">
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <input
                ref={passwordRef}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button
              type="submit"
              onClick={btnSubmit}
              className="btn btn-primary  btn-lg btn-block"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
