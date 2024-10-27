import "./App.css";
import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import MyLogin from "./components/MyLogin";
import MyReg from "./components/MyReg";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import MyAdminLogin from "./components/MyAdminLogin";
import Addproduct from "./components/Addproduct";
import ResetPassword from "./components/password Reset/ResetPassword";
import ResetPwToken from "./components/password Reset/ResetPwToken";
import ProductsAdmin from "./pages/ProductsAdmin";
import { MainContext } from "./Context/MainContext";

function App() {
  let { token, user } = useContext(MainContext);

  // Custom authentication check
  const isAuthenticated = () => {
    if (user.user.email){
      return true;
    }
    return false;
  };

  // Protected route for /products
  const ProtectedProductsRoute = ({ element }) => {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  const ProtectedProductsRouteAdmin = ({ pto,element }) => {
    if (user) {
      if (isAuthenticated() && user.user.role === "admin") {
        return element;
      } else {
        return <Navigate to="/home" />;
      }
    } else {
      let topto = `/admin?to=${pto}`
      return <Navigate to={topto} />;
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <MyNav />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="resetpassword/:id" element={<ResetPwToken />} />
        <Route path="login" element={<Login />}>
          <Route path="" element={<MyLogin />} />
          <Route path="new" element={<MyReg />} />
        </Route>
        <Route
          path="products"
          element={<ProtectedProductsRoute element={<Products />} />}
        />
        <Route path="about" element={<AboutUs />} />
        <Route path="admin" element={<MyAdminLogin />} />

        <Route
          path="product"
          element={<ProtectedProductsRouteAdmin pto="product" element={<Addproduct />} />}
        />
        <Route
          path="editproduct"
          element={<ProtectedProductsRouteAdmin pto="editproduct" element={<ProductsAdmin />} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <MyFooter />
    </div>
  );
}
export default App;