import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "./Context/MainContext";
import { doesHttpOnlyCookieExist } from "./utils";
import { userAPI } from "./API/userAPI";
import App from "./App";

export default function CheckToken() {
  const { setUser, user } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwtExist = doesHttpOnlyCookieExist("jwt");
    if (jwtExist) {
      async function fetchUser() {
        const res = await userAPI.Me();
        if (res?.status === "success") {
          setUser(res);
        }
        setIsLoading(false);
      }

      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-center mt-2 changa-one h3 text-primary">
          Welcome to KootShop
        </p>
        <p className="text-center mt-2 h5">
          Loading...
        </p>
      </div>
    );
  }
  

  return <App />;
}
