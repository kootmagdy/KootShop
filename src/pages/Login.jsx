import React from "react";
import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

export default function Login() {
  // navigartion
  const navigateTo = useNavigate();
  const GoToLib = () => {
    navigateTo("");
  };
  const GoToCompany = () => {
    navigateTo("new");
  };

  return (
    <div>
      <div className="container mt-5 mb-5 w-50">
        <div className="row justify-content-center align-content-center gx-1 ">
          <div className="col-6 text-center">
            <Button className="max-w w-100" variant="primary" onClick={GoToLib}>
              Login
            </Button>
          </div>
          <div className="col-6 text-center">
            <Button
              className="max-w w-100"
              variant="success"
              onClick={GoToCompany}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
