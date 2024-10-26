import React,{ useContext, useRef, useState }  from "react";
import { MainContext } from "./../Context/MainContext";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../API/userAPI";

export default function MyReg() {
  let { setToken , setUser } = useContext(MainContext);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const navigateTo = useNavigate();
  const [error, setError] = useState(null); // State variable for error message

  const btnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (email && password && name && passwordConfirm) {
      try {
        const result = await userAPI.signUp(name,email, password, passwordConfirm);
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
            <h3 className="text-center">Sign Up:</h3>

            <div className="form-group">
              <input
              ref={nameRef}
                type="text"
                className="form-control"
                placeholder="full name"
              />
            </div>

            <div className="form-group">
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <input
              ref={passwordRef}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <input
              ref={passwordConfirmRef}
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" onClick={btnSubmit} className="btn btn-success btn-lg btn-block">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
