import React, { useRef, useEffect, useState } from "react";
import RaiseAlert2 from "../Alerts/RaiseAlert2";
import { validateEmail } from "../../utils";
import { userAPI } from "../../API/userAPI";
export default function ResetPassword() {
  const emailRef = useRef(null);
  const [error, setError] = useState(null);
  const [showAlert, setshowAlert] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const btnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email && !error) {
      const res = await userAPI.ForgetPassword(email);
      console.log(res);
      if (res?.status === "success") {
        setStatus(res.status);
        setMessage(`${res.message}`);
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
      };
    }
  }, [showAlert]);


  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-3">
      <h3 className="text-center text-primary">
        Reset Your Account Password
      </h3>
      <p>Please enter your account email address</p>
      <form className="w-25">
        <div className="form-group">
          <input
            ref={emailRef}
            type="email"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            onChange={(e) => {
              if (validateEmail(e.target.value)) {
                setError(false);
              } else {
                setError("Write a suitable email address!");
              }
            }}
            name="email"
            required
          />
          {error && <div className="invalid-feedback">{error}</div>}
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
