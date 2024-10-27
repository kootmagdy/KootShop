import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import {
  COffcanvas,
  COffcanvasBody,
  CCloseButton,
  COffcanvasTitle,
  COffcanvasHeader,
} from "@coreui/bootstrap-react";
import Dropdown from 'react-bootstrap/Dropdown';
import MyOffCanvCard from "./MyOffCanvCard";
import shop from "../assets/imgs/shop2.png";

export default function MyNav() {
  let { count, productCanv, user } = useContext(MainContext);
  const [visible, setVisible] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    let sum = 0;
    productCanv.map((product) => {
      sum += product.price;
    });
    setTotalMoney(sum);
  }, [productCanv]);

  useEffect(() => {
    console.log("mynav : ",user);
  }, [user]);

  return (
    <Navbar className="bg-light sticky-top navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="my-span">
          <img src={shop} />{" "}
          <span className="text-uppercase fw-semibold">Koot Shop</span>{" "}
          <img src={shop} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto hstack gap-2">
            <NavLink className="nav-link text-uppercase fw-semibold" to="/home">
              Home
            </NavLink>
            <NavLink
              className="nav-link text-uppercase fw-semibold"
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              className="nav-link text-uppercase fw-semibold"
              to="/products"
            >
              Products
            </NavLink>
            {!user ? (
              <NavLink
                className="nav-link text-uppercase fw-semibold"
                to="/login"
              >
                Login
              </NavLink>
            ) : (
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-button-drop-down">
                Your Account
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item >{user.user.name}</Dropdown.Item>
                <Dropdown.Item>{user.user.email}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            )}
            <div className="position-relative">
              <i
                onClick={() => setVisible(true)}
                className="fa-solid fa-cart-shopping fs-5 cr text-secondary mycart"
              ></i>
              {count > 0 && (
                <p className="position-absolute cart-notify">{count}</p>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* <CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton> */}
      <COffcanvas
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
        className="offcanve"
      >
        <COffcanvasHeader>
          <COffcanvasTitle className="color-primary fs-4 fw-bold sh">
            <i className="fa-solid fa-cart-shopping text-dark fs-5"></i> Product
            Cart <i className="fa-solid fa-cart-shopping text-dark fs-5"></i>
          </COffcanvasTitle>
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>
          {productCanv.map((products, index) => {
            return <MyOffCanvCard productInfo={products} key={products.id} />;
          })}

          <div className="container bg-dark rounded p-2">
            <p className="text-white text-center fs-5 fw-bold">
              Total : {totalMoney}$
            </p>
            <button className="btn btn-outline-success w-100 fw-bold">
              CheckOut Now
            </button>
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </Navbar>
  );
}
