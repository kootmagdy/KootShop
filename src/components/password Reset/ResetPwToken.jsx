import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RaiseAlert2 from "../Alerts/RaiseAlert2";
import { userAPI } from "../../API/userAPI";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

export default function ResetPwToken() {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const { setUser, setToken } = useContext(MainContext);
  const passwordRef = useRef(null);
  const passwordCRef = useRef(null);
  const [Logged, setLogged] = useState(false);
  const [errorPw, setErrorPw] = useState(null);
  const [errorPwC, setErrorPwC] = useState(null);
  const [showAlert, setshowAlert] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const btnSubmit = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const passwordConfirm = passwordCRef.current.value;

    if (password && passwordConfirm && !errorPw && !errorPwC) {
      const res = await userAPI.ResetPassword(id, password, passwordConfirm);
      if (res?.status === "success") {
        setStatus(res.status);
        setMessage(`Password Successfully Updated`);
        setUser(res.data);
        setToken(res.token);
        setLogged(true);
        setshowAlert(true);
      } else if (res?.status != "success") {
        setStatus(res.status);
        setMessage(res.message);
        setshowAlert(true);
      }
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setshowAlert(false);
      }, 2400);
      return () => {
        clearTimeout(timer);
        if (Logged) {
          navigateTo("/home");
        }
      };
    }
  }, [showAlert]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-3">
      <h3 className="text-center text-primary">
        Reset Your Account Password
      </h3>
      <p>Please enter your new password</p>
      <form className="w-25 d-flex flex-column gap-3">
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className={`form-control ${errorPw ? 'is-invalid' : ''}`}
            id="password"
            onChange={(e) => {
              const password = e.target.value;
              if (password.length >= 10) {
                setErrorPw(false);
              } else {
                setErrorPw("Password must be >= 10 characters!");
              }
  
              if (password === passwordCRef.current?.value) {
                setErrorPwC(false);
              } else {
                setErrorPwC("Passwords must be equal!");
              }
            }}
            name="password"
            required
          />
          {errorPw && <div className="invalid-feedback">{errorPw}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="passwordC">Confirm Password</label>
          <input
            ref={passwordCRef}
            type="password"
            className={`form-control ${errorPwC ? 'is-invalid' : ''}`}
            id="passwordC"
            onChange={(e) => {
              if (e.target.value === passwordRef.current?.value) {
                setErrorPwC(false);
              } else {
                setErrorPwC("Passwords must be equal!");
              }
            }}
            name="passwordC"
            required
          />
          {errorPwC && <div className="invalid-feedback">{errorPwC}</div>}
        </div>
        {showAlert && <RaiseAlert2 state={status} message={message} />}
        <button
          className="btn btn-primary mt-3 w-100"
          type="submit"
          onClick={btnSubmit}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
